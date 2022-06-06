import React, { useState } from "react"

export const TextInput = (props: any) => {
    return (
        <div className="flex flex-col justify-center w-96 pb-6">
            <input
                className="w-full bg-transparent h-12 border-b-2 text-xl hover:border-b-sky-500 focus:ease-in focus:border-b-sky-600 focus:outline-none"
                onChange={props.onChange}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}
