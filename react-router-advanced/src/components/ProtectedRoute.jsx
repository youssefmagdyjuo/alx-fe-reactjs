import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {
    function isAuth(){
        return localStorage.getItem('accToken')!==null
    }
    return isAuth()? (
        children
    ):<Navigate to={`/Login`} replace/>
}
