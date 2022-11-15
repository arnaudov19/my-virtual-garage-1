import React from "react"
import { Form, Select } from "antd"
import { SizeType } from "antd/es/config-provider/SizeContext"

const { Option } = Select

type Props = {
    value?: string
    className?: string
    label?: string
    size?: SizeType
    placeholder?: string
    styles?: {}
    name?: string
    rules?: any[]
    optionsList: any[]
    disabled?: boolean
}

export const FormSelectInput = (props: Props) => {
    const handleChange = (value: any) => {
        console.log(`change ${value}`)
    }
    return (
        <Form.Item noStyle>
            <label className="w-96 flex self">{props.label}</label>
            <Form.Item className={`${props.className}`} name={props.name} style={props.styles} rules={props.rules}>
                <Select
                    size={props.size}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    onChange={handleChange}>
                    {props.optionsList.map((item: any) => (
                        <Option key={item.id} value={item.brand}>
                            {item.name}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Form.Item>
    )
}
