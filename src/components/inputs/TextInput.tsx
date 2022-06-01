import React, { useState } from "react"
import { Form, Input, InputNumber } from "antd"

export const TextInput = (props: any) => {
    return (
        <div className="flex flex-col justify-center w-96 pb-6">
            <input
                required
                className="w-full bg-transparent h-12 border-b-2 text-xl hover:border-b-sky-500 focus:outline-none"
                onChange={props.onChange}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
            />
        </div>
    )
}
