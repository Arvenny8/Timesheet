import { useContext } from "react";
import AdminInput from "../components/AdminInput";
import TeamInput from "../components/TeamInput";
import { AuthContext } from "../contexts/AuthContext";

export default function TeamPage() {
    const { user } = useContext(AuthContext);
    return (
        <>
            {user.role === "Admin" ? (
                <>
                    <div className="bg-slate-600 h-screen">
                        <div className="grid grid-cols-5 gap-4 ">
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
                            <div className="flex justify-center text-xl  font-semibold p-1 text-white">
                                Update and Delete
                            </div>
                            <AdminInput />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-slate-600 h-screen">
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

                            <TeamInput />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
