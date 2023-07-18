import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function ProjectPage() {
    const [data, setData] = useState([]);
    const [emp, setEmp] = useState([]);
    const [projectName, setProjectName] = useState("");
    const [Budget, setBudget] = useState("");
    const [status, setStatus] = useState("");
    const [employeeId, setEmployeeId] = useState("");

    const hdlsumbit = async (e) => {
        try {
            const res = await axios.post("/project/addproject", {
                projectName,
                Budget,
                status,
                employeeId,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/project/getproject");
                const team = await axios.get("/teampage/getpage");
                setData(response.data.project);
                setEmp(team.data.employee);
                // console.log(response.data.project);
                // console.log(team.data.employee);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    console.log(employeeId);
    return (
        <div className="h-screen bg-slate-500">
            {data.map((data) => (
                <>
                    <div className="flex gap-4 justify-center">
                        <div className="bg-slate-300 rounded m-4 h-[40px] w-[200px] flex justify-center items-center">
                            {data.projectName}
                        </div>
                        <div className="bg-slate-300 rounded m-4 h-[40px] w-[200px] flex justify-center items-center">
                            {data.Budget}
                        </div>
                        <div className="bg-slate-300 rounded m-4 h-[40px] w-[200px] flex justify-center items-center">
                            {data.status}
                        </div>
                        <div className="bg-slate-300 rounded m-4 h-[40px] w-[200px] flex justify-center items-center">
                            {
                                data.EmployeeProjectRelations[0].Employee
                                    .firstName
                            }
                            _
                            {data.EmployeeProjectRelations[0].Employee.lastName}
                        </div>
                    </div>
                </>
            ))}
            <div className="flex justify-center">
                <input
                    className="bg-slate-300 rounded m-4 h-[40px] w-[200px] "
                    type="text"
                    placeholder="Project Name"
                    name="projectName"
                    onChange={(e) => setProjectName(e.target.value)}
                />
                <input
                    className="bg-slate-300 rounded m-4 h-[40px] w-[200px]"
                    type="text"
                    placeholder="Budget"
                    name="Budget"
                    onChange={(e) => setBudget(e.target.value)}
                />
                <select
                    name="status"
                    className="bg-slate-300 rounded m-4 h-[40px] w-[200px]"
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="DONE">DONE</option>
                    <option value="On Going">On Going</option>
                </select>
                {/* ////////////////////////////////////// */}
                <select
                    name="employee"
                    className="bg-slate-300 rounded m-4 h-[40px] w-[200px]"
                    onChange={(e) => setEmployeeId(e.target.value)}
                >
                    {emp.map((emp) => (
                        <>
                            <option value={emp.id}>
                                {emp.firstName} {emp.lastName}
                            </option>
                        </>
                    ))}
                </select>
                {/* ////////////////////////////////////////// */}
                <button
                    onClick={hdlsumbit}
                    className="bg-slate-300 rounded h-[40px] w-[200px] m-4"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
