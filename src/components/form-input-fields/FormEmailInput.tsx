import React, { ChangeEvent } from "react"
import { Form, Input } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"

type Props = {
    email?: string
    label?: string
    inputType: string
    onChange: (email: ChangeEvent<HTMLInputElement>) => void
    value?: string
    size: SizeType
    placeholder: string
}
export const FormEmailInput = (props: Props) => {
    return (
        <Form.Item
            className="flex justify-center w-96 pb-6"
            name="username"
            rules={[
                {
                    required: true,
                    message: "Please input your email!",
                },
            ]}>
            <Input
                className="w-full"
                onChange={props.onChange}
                type={props.inputType}
                value={props.value}
                size={props.size}
                placeholder={props.placeholder}
            />
        </Form.Item>
    )
}
