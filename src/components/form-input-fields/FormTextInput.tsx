import React from "react"
import { Form, Input } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"

type Props = {
    name?: string
    className?: string
    label?: string
    size?: SizeType
    placeholder?: string
    rules?: any[]
    styles?: {}
}

export const FormTextInput = (props: Props) => {
    return (
        <Form.Item noStyle>
            {props.label ? <label>{props.label}</label> : null}
            <Form.Item name={props.name} style={props.styles} rules={props.rules}>
                <Input
                    className={`w-full ${props.className}`}
                    type="text"
                    size={props.size}
                    placeholder={props.placeholder}
                />
            </Form.Item>
        </Form.Item>
    )
}
const styles = {
    FormItem: {
        display: "flex",
        justifyContent: "center",
        width: "300px",
    },
}
