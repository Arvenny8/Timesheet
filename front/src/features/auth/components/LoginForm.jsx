// import { Link } from "react-router-dom";
import { useState } from "react";
import LoginInput from "./LoginInput";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";

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
            navigate("/timesheetpage");
            console.log("first");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className="bg-slate-500 w-screen h-screen flex items-center justify-center"
            >
                <div className=" flex items-center justify-center bg-slate-300 w-4/12 h-1/4">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center">
                            <div className="font-semibold">TIMESHEET</div>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">E-MAIL :</div>
                            <LoginInput
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">PASSWORD :</div>
                            <LoginInput
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="flex justify-center">
                            {/* <Link to="/registerpage">
                                <div className="font-semibold">REGISTER</div>
                            </Link> */}
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
