import React, { useState } from "react"
import { Form, Input, InputNumber } from "antd"

export const NumberInput = (props: any) => {
    return (
        <div className="flex bg-transparent flex-col justify-center w-96 pb-6">
            <input
                className="w-full"
                onChange={props.onChange}
                type="number"
                value={props.value}
                name={props.name}
                size={props.size}
                placeholder={props.placeholder}
            />
        </div>
    )
}
