import { DatePicker, DatePickerProps, Form } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"
import React from "react"
import Moment from "react-moment"
type Props = {
    className?: string
    placeholder?: string
    size?: SizeType
    label?: string
    name?: string
    disabled?: boolean
}

export const FormDatePicker = (props: Props) => {
    const handleValue: DatePickerProps["onChange"] = (date, dateString) => {
        console.log(props.label, ":", dateString)
    }
    return (
        <Form.Item noStyle>
            <label className="w-96 flex self">{props.label}</label>
            <Form.Item name={props.name}>
                <DatePicker
                    className={`${props.className}`}
                    size={props.size}
                    placeholder={props.placeholder}
                    onChange={handleValue}
                    disabled={props.disabled}
                />
            </Form.Item>
        </Form.Item>
    )
}
