import React from "react"
import { Form, Input } from "antd"

// @ts-ignore
export const CustomInputField = (props) => {
    return (
        // Not FormItem, only INPUT

        // Rename so its clear that its FormItemInput component
        <Form.Item style={{ display: "flex", justifyContent: "center", width: "300px" }}>
            <label>{props.label}</label>
            <Input
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
