import React from "react"

export const CreateUserContainer = (props: any) => {
    return (
        <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
            <div className="bg-white h-5/6 w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-lg shadow-2xl">
                {props.children}
            </div>
        </div>
    )
}
