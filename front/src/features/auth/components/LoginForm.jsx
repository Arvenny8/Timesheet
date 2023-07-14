import { useState } from "react";
import LoginInput from "./LoginInput";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("/auth/login", { email, password });
            localStorage.setItem("accessToken", res.data.accessToken);
            navigate("/teamPage");
            console.log("first");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className="bg-slate-800 w-screen h-screen flex items-center justify-center"
            >
                <div className=" flex items-center justify-center bg-slate-600 w-4/12 h-1/4">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center">
                            <div className="font-semibold text-xl text-white">
                                TIMESHEET
                            </div>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                E-MAIL :
                            </div>
                            <LoginInput
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                PASSWORD :
                            </div>
                            <LoginInput
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="flex justify-center gap-6">
                            <button
                                type="submit"
                                className="font-semibold bg-gray-500 text-white w-24 rounded"
                            >
                                Submit
                            </button>
                            <Link to="/registerpage">
                                <button className="font-semibold bg-gray-500 text-white w-24 rounded">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
