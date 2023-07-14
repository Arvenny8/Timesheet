import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditTeampage() {
    const { state } = useLocation();
    const [firstName, setFirstName] = useState(state.emp.firstName);
    const [email, setEmail] = useState(state.emp.email);
    const [salary, setSalary] = useState(state.emp.salary);
    const [role, setRole] = useState(state.emp.role);
    const navigate = useNavigate();

    const hdlFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const hdlEmail = (e) => {
        setEmail(e.target.value);
    };

    const hdlSalary = (e) => {
        setSalary(e.target.value);
    };

    const hdlRole = (e) => {
        setRole(e.target.value);
    };

    const hdlSubmit = async () => {
        await axios.put(`/teampage/update/${state.emp.id}`, {
            firstName,
            email,
            salary,
            role,
        });
        navigate("/teampage");
    };

    console.log(state);
    return (
        <div className="h-screen bg-slate-600">
            <>
                <div className="grid grid-cols-4 gap-4 ">
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        NAME
                    </div>
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        EMAIL
                    </div>
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        SALARY
                    </div>
                    <div className="flex justify-center text-xl font-semibold p-1 text-white">
                        ROLE
                    </div>
                    <input
                        className="rounded bg-slate-300"
                        value={firstName}
                        onChange={hdlFirstName}
                    />
                    <input
                        className="rounded bg-slate-300"
                        value={email}
                        onChange={hdlEmail}
                    />
                    <input
                        className="rounded bg-slate-300"
                        value={salary}
                        onChange={hdlSalary}
                    />
                    <input
                        className="rounded bg-slate-300"
                        value={role}
                        onChange={hdlRole}
                    />
                    <button
                        className="text-white font-semibold text-xl bg-slate-800 rounded"
                        onClick={hdlSubmit}
                    >
                        Submit
                    </button>
                </div>
            </>
        </div>
    );
}
