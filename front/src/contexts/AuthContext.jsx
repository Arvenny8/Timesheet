import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getme = async () => {
            // axios({method:'get', url:'/auth/me', headers: {}})
            const res = await axios.get("/auth/me", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            });
            setUser(res.data.user);
        };
        getme();
    }, []);
    console.log(user);
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}
