import React, { useState } from "react"
import { Form, Input } from "antd"

export const FormItemPasswordInput = (props: any) => {
    return (
        <Form.Item className="flex justify-center w-96">
            <label>{props.label}</label>
            <Input.Password
                className="w-full"
                onChange={props.onChange}
                type={props.inputType}
                value={props.value}
                name={props.name}
                size={props.size}
                placeholder={props.placeholder}
            />
        </Form.Item>
    )
}
