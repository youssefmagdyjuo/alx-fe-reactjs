import React from "react";
import { Navigate } from "react-router-dom";

// ✅ هوك بسيطة اسمها useAuth — بتشيك لو في accToken
function useAuth() {
    return localStorage.getItem("accToken") !== null;
}

export default function ProtectedRoute({ children }) {
    const isAuthenticated = useAuth(); // ✅ استخدمنا الهوك بدل الدالة المباشرة

    return isAuthenticated ? children : <Navigate to="/Login" replace />;
}
