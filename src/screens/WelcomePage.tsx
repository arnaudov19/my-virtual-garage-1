import React from "react"

type Props = {
    onSetPage: (page: number) => void
}

export const WelcomePage = (props: Props) => {
    const loginPageHandler = () => {
        props.onSetPage(1)
    }
    const createAccountHandler = () => {
        props.onSetPage(3)
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4 h-screen">
            <div>
                <h1 className="text-5xl text-black-400 pb-12 ">Welcome to My Virtual Garage</h1>
            </div>
            <div className="button-container">
                <button
                    onClick={createAccountHandler}
                    className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Create new
                </button>
                <button
                    onClick={loginPageHandler}
                    className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Log in
                </button>
            </div>
        </div>
    )
}
