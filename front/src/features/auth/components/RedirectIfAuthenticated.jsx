import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function RedirectIfAuthenticated({ children }) {
    return <Navigate to="/" />;
}
