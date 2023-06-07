import { useState } from "react"


export const LoggedIn = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
        </div>
    )
}