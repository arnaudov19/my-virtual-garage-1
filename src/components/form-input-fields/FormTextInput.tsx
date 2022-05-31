import React from "react"
import { Form, Input } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"

type Props = {
    inputText?: string
    label?: string
    inputType?: string
    onChange: () => {}
    value?: string
    size?: SizeType
    name?: string
    placeholder?: string
}

export const FormTextInput = (props: Props) => {
    return (
        <Form.Item style={styles.FormItem}>
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
const styles = {
    FormItem: {
        display: "flex",
        justifyContent: "center",
        width: "300px",
    },
}
