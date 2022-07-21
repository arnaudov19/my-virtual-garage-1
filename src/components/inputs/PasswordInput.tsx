import React, { useState } from "react"

export const PasswordInput = (props: any) => {
    return (
        <div className="flex flex-col justify-center w-96 pb-6">
            <input
                className="w-full bg-transparent h-12 border-b-2 text-xl hover:border-b-sky-500 focus:border-b-sky-600 focus:outline-none"
                type="password"
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
}
