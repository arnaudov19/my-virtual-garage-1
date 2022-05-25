import React, { useState } from "react"
import { Form, Input, InputNumber } from "antd"

export const FormItemNumberInput = (props: any) => {
    return (
        <Form.Item style={styles.inputContainer}>
            <label>{props.label}</label>
            <InputNumber
                style={styles.inputField}
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
    inputContainer: {
        display: "flex",
        justifyContent: "center",
        width: "300px",
    },
    inputField: {
        width: "100%",
    },
}
