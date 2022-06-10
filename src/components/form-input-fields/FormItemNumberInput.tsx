import React, { useState } from "react"
import { Form, Input, InputNumber } from "antd"

export const FormItemNumberInput = (props: any) => {
    return (
        <Form.Item noStyle>
            <label>{props.label}</label>
            <Form.Item className="flex justify-center w-96 pb-6">
                <InputNumber
                    className="w-full"
                    onChange={props.onChange}
                    type={props.inputType}
                    value={props.value}
                    name={props.name}
                    size={props.size}
                    placeholder={props.placeholder}
                />
            </Form.Item>
        </Form.Item>
    )
}
