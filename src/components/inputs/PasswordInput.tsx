import React, { useState } from "react"
import { Form, Input, InputNumber } from "antd"

export const PasswordInput = (props: any) => {
    return (
        <div className="flex flex-col justify-center w-96 pb-6">
            <input
                className="w-full bg-transparent invalid:border-red-500 h-12 border-b-2 text-xl hover:border-b-sky-500 focus:outline-none"
                onChange={props.onChange}
                type="password"
                value={props.value}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
}
