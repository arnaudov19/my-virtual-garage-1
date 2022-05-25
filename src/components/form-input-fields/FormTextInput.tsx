import React from "react"
import { Form, Input } from "antd"

// @ts-ignore
export const FormTextInput = (props) => {
    return (
        // Not FormItem, only INPUT

        // Rename so its clear that its FormItemInput component
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
