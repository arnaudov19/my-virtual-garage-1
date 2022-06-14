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
    value?: string
}

export const FormTextInput = (props: Props) => {
    return (
        <Form.Item noStyle>
            <label className="w-96 flex self">{props.label}</label>
            <Form.Item name={props.name} style={props.styles} rules={props.rules}>
                <Input
                    className={`w-full ${props.className}`}
                    type="text"
                    size={props.size}
                    placeholder={props.placeholder}
                    value={props.value}
                />
            </Form.Item>
        </Form.Item>
    )
}
