import { useState } from "react";
import RegisterInput from "../features/auth/components/RegisterInput";
import axios from "../api/axios";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [salary, setSalary] = useState("");
    const [role, setRole] = useState("");

    // const hdlemail = (event) => {
    //     setEmail(event.target.value);
    // };

    const hdlpassword = (event) => {
        setPassword(event.target.value);
    };
    const hdlconfirmpassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    const hdlfirstName = (event) => {
        setFirstName(event.target.value);
    };
    const hdllastName = (event) => {
        setLastName(event.target.value);
    };
    const hdlsalary = (event) => {
        setSalary(event.target.value);
    };
    const hdlrole = (event) => {
        setRole(event.target.value);
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("/auth/register", {
                email,
                password,
                confirmPassword,
                firstName,
                lastName,
                salary,
                role,
            });

            localStorage.setItem("accessToken", res.data.accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(email);
    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className="bg-slate-500 w-screen h-screen flex items-center justify-center"
            >
                <div className=" flex items-center justify-center bg-slate-300 w-4/12 h-1/3">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center">
                            <div className="font-semibold">CREATE ACCOUNT</div>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">E-MAIL :</div>
                            <RegisterInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">PASSWORD :</div>
                            <RegisterInput
                                value={password}
                                onChange={hdlpassword}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">
                                CONFIRMPASSWORD :
                            </div>
                            <RegisterInput
                                value={confirmPassword}
                                onChange={hdlconfirmpassword}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">FIRSTNAME :</div>
                            <RegisterInput
                                value={firstName}
                                onChange={hdlfirstName}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">LASTNAME :</div>
                            <RegisterInput
                                value={lastName}
                                onChange={hdllastName}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">SALARY :</div>
                            <RegisterInput
                                value={salary}
                                onChange={hdlsalary}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold">ROLE :</div>
                            <RegisterInput value={role} onChange={hdlrole} />
                        </div>
                        <button
                            type="submit"
                            className="bg-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
