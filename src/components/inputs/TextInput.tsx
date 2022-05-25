import React, { useState } from "react"
import { Form, Input, InputNumber } from "antd"

export const TextInput = (props: any) => {
    return (
        <div style={styles.inputContainer}>
            <label>{props.label}</label>
            <Input
                style={styles.inputField}
                onChange={props.onChange}
                type={props.inputType}
                value={props.value}
                name={props.name}
                size={props.size}
                placeholder={props.placeholder}
            />
        </div>
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
