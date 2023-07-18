import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Pencil } from "./image";

export default function AdminInput() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const hdlDelete = async (id) => {
        const res = await axios.delete(`/teampage/delete/${id}`);
        navigate("/teampage");
    };

    const hdlEdit = async (emp) => {
        navigate("/editteampage", { state: { emp } });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/teampage/getpage");
                setData(response.data.employee);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data.map((data) => (
                <>
                    <div className="flex justify-center bg-slate-200 w-auto p-2 rounded">
                        {data.firstName}
                    </div>
                    <div className="flex justify-center bg-slate-200 w-auto p-2 rounded">
                        {data.email}
                    </div>
                    <div className="flex justify-center bg-slate-200 w-auto p-2 rounded">
                        {data.salary}
                    </div>
                    <div className="flex justify-center bg-slate-200 w-auto p-2 rounded">
                        {data.role}
                    </div>
                    <div className="flex justify-evenly">
                        <button
                            className="text-white"
                            onClick={() => hdlEdit(data)}
                        >
                            <Pencil />
                        </button>

                        <button
                            className="text-white font-semibold text-xl"
                            onClick={() => hdlDelete(data.id)}
                        >
                            &#10005;
                        </button>
                    </div>
                </>
            ))}
        </>
    );
}
