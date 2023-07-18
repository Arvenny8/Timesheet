import { useState } from "react";
import RegisterInput from "../features/auth/components/RegisterInput";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [salary, setSalary] = useState("");
    const [role, setRole] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const navigate = useNavigate();

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
    const hdlphone = (event) => {
        setPhone(event.target.value);
    };
    const hdladdress = (event) => {
        setAddress(event.target.value);
    };
    const hdlgender = (event) => {
        setGender(event.target.value);
    };
    const hdlbirthday = (event) => {
        setBirthday(event.target.value);
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
                phone,
                address,
                gender,
                birthday,
            });

            localStorage.setItem("accessToken", res.data.accessToken);
        } catch (error) {
            console.error(error);
        } finally {
            navigate("/");
        }
    };

    console.log(phone);
    return (
        <>
            <form
                onSubmit={handleFormSubmit}
                className="bg-slate-800 w-screen h-screen flex items-center justify-center"
            >
                <div className=" flex items-center justify-center bg-slate-600 w-4/12 h-1/2">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-center">
                            <div className="font-semibold text-white">
                                CREATE ACCOUNT
                            </div>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white ">
                                E-MAIL :
                            </div>
                            <RegisterInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white ">
                                PASSWORD :
                            </div>
                            <RegisterInput
                                value={password}
                                onChange={hdlpassword}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                CONFIRMPASSWORD :
                            </div>
                            <RegisterInput
                                value={confirmPassword}
                                onChange={hdlconfirmpassword}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                FIRSTNAME :
                            </div>
                            <RegisterInput
                                value={firstName}
                                onChange={hdlfirstName}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                LASTNAME :
                            </div>
                            <RegisterInput
                                value={lastName}
                                onChange={hdllastName}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                SALARY :
                            </div>
                            <RegisterInput
                                value={salary}
                                onChange={hdlsalary}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                PHONE :
                            </div>
                            <RegisterInput value={phone} onChange={hdlphone} />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                ADDRESS :
                            </div>
                            <RegisterInput
                                value={address}
                                onChange={hdladdress}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                GENDER :
                            </div>
                            <RegisterInput
                                value={gender}
                                onChange={hdlgender}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                BIRTHDAY :
                            </div>
                            <RegisterInput
                                value={birthday}
                                onChange={hdlbirthday}
                            />
                        </div>
                        <div className="flex gap-5 justify-center">
                            <div className="font-semibold text-white">
                                ROLE :
                            </div>
                            <RegisterInput value={role} onChange={hdlrole} />
                        </div>
                        <button
                            type="submit"
                            className="bg-slate-800 text-white   font-semibold rounded"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
