import React from "react"

export const CreateUserContainer = (props: any) => {
    return (
        <div className="w-screen h-screen sm:bg-transparent xl:bg-gray-200 flex flex-col items-center justify-center ">
            <div className="w-screen sm:bg-transparent lg:bg-white md:h-5/6 xl:w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-xl xl:shadow-2xl overflow-auto">
                {props.children}
            </div>
        </div>
    )
}
