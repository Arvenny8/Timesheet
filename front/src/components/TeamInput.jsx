import { useState, useEffect } from "react";
import axios from "axios";

export default function TeamInput() {
    const [data, setData] = useState([]);
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
                    <div className="flex justify-center bg-slate-200 w-auto p-2">
                        {data.firstName}__
                        {data.lastName}
                    </div>
                    <div className="flex justify-center bg-slate-200 w-auto p-2">
                        {data.email}
                    </div>
                    <div className="flex justify-center bg-slate-200 w-auto p-2">
                        {data.salary}
                    </div>
                    <div className="flex justify-center bg-slate-200 w-auto p-2">
                        {data.role}
                    </div>
                </>
            ))}
        </>
    );
}
