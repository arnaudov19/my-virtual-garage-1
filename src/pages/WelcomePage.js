import React from "react"
import { Button } from "antd"

type Props = {
    onSetPage: (page: number) => void,
}

export const WelcomePage = (props: Props) => {
    const goToLoginPage = () => {
        props.onSetPage(1)
    }
    const goToCreateAccPage = () => {
        props.onSetPage(3)
    }
    return (
        <div className="title-container">
            <div>
                <h1>Welcome to My Virtual Garage</h1>
            </div>
            <div className="button-container">
                <button
                    onClick={goToCreateAccPage}
                    className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Create new
                </button>
                <button
                    onClick={goToLoginPage}
                    className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Log in
                </button>
            </div>
        </div>
    )
}
