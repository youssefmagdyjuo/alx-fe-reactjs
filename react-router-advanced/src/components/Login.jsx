import React from 'react'

export default function Login() {
function handelLogin(){
    localStorage.setItem('accToken','myToken')
    window.location.href('/Profile')
}
    return (
        <div>
        <button onClick={handelLogin}>Login</button>
        </div>
    )
}
