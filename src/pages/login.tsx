import React from "react"
import LoginScreen from "../screens/login/LoginScreen"

const Login = () => {
    return (
        <LoginScreen
            // onSetPage={(page: number) => setCurrentPage(page)}
            // onCollectLoginData={collectLoginData}
            onSetPage={(page: number) => null}
            onCollectLoginData={(page: number) => null}
        />
    )
}

export default Login
