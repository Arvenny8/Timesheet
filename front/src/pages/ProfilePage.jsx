import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/teampage/getemployeebyId/${3}`
                );
                setData(response.data.employee);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    console.log(data);
    return (
        <>
            <div className="flex w-full h-screen">
                {/* RIGHT */}
                <div className="bg-slate-200 w-[450px] h-full flex flex-col">
                    <div className="flex justify-center">
                        <div className="bg-white mt-10 w-[150px] h-[150px]">
                            <div className="flex justify-center ">IMAGE</div>
                        </div>
                    </div>
                    <div className=" mt-10 w-[150px] h-[150px] ml-2">
                        <div className="text-xl text-gray-500 ">Work</div>
                        <li>Dev ops 1 year</li>
                        <li className="w-[200px]">UX/UI Design 1 year</li>
                    </div>
                    <div className=" mt-10 w-[150px] h-[150px] ml-2">
                        <div className="text-xl text-gray-500">Skill </div>
                        <li>Branding</li>
                        <li>UX/UI</li>
                        <li>Web-Design</li>
                        <li>Packaging</li>
                        <li>Print & Editorial</li>
                    </div>
                </div>

                {/* LEFT */}
                <div className="w-full mt-4 ml-4 flex flex-col gap-10">
                    <div className="text-2xl">
                        {data.firstName} {data.lastName}
                    </div>
                    <div>
                        <div className="text-xl">CONTACT INFORMATION</div>
                        <hr></hr>
                        <div className="mt-4">Phone : {data.phone}</div>
                        <div>Address : {data.address}</div>
                        <div>E-mail : {data.email}</div>
                    </div>
                    <div>
                        <div className="text-xl">BASIC INFORMATION</div>
                        <hr></hr>
                        <div className="mt-4">Birthday : {data.birthday}</div>
                        <div>Gender : {data.gender}</div>
                    </div>
                    <div>
                        <div className="text-xl mt-4">MY TEAM</div>
                        <hr></hr>
                    </div>
                    <div>
                        <div className="text-xl mt-4">TEAM INVITE</div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </>
    );
}
