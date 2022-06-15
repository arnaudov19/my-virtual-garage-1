import React from "react"
import { Form, Input, message } from "antd"
import { SizeType } from "antd/lib/config-provider/SizeContext"

type Props = {
    name?: string
    className?: string
    label?: string
    size?: SizeType
    placeholder?: string
    rules?: any[]
    styles?: {}
    value?: string
    disabled?: boolean
}

export const FormItemPasswordInput = (props: Props) => {
    return (
        <Form.Item noStyle>
            <label className="w-96 flex self">{props.label}</label>
            <Form.Item
                name={props.name}
                style={props.styles}
                rules={[{ required: true, message: "Please input your password!" }]}>
                <Input.Password
                    disabled={props.disabled}
                    className={`w-full ${props.className}`}
                    type="password"
                    size={props.size}
                    placeholder={props.placeholder}
                    value={props.value}
                />
            </Form.Item>
        </Form.Item>
    )
}
