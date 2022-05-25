import React, { useState } from "react"
import { Form, Input } from "antd"

export const FormItemPasswordInput = (props: any) => {
    return (
        <Form.Item style={styles.FormItem}>
            <label>{props.label}</label>
            <Input.Password
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
