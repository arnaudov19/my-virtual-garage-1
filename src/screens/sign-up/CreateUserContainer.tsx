import React from "react"

export const CreateUserContainer = (props: any) => {
    return (
        <div className="w-screen h-screen sm:bg-transparent lg:bg-gray-200 flex flex-col items-center justify-center ">
            <div className="w-screen sm:bg-transparent lg:bg-white h-5/6 lg:w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-xl lg:shadow-2xl overflow-auto">
                {props.children}
            </div>
        </div>
    )
}
