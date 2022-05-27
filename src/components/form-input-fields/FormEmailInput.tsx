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
            style={styles.FormItem}
            name="username"
            rules={[
                {
                    required: true,
                    message: "Please input your email!",
                },
            ]}>
            <label>{props.label}</label>

            <Input
                onChange={props.onChange}
                type={props.inputType}
                value={props.value}
                size={props.size}
                placeholder={props.placeholder}
            />
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
