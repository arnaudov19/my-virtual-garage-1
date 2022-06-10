import React from "react"
import { Form, Input, Select } from "antd"
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
}

export const BrandFormSelectInput = (props: Props) => {
    const handleChange = (value: any) => {
        console.log(`change ${value}`)
    }
    return (
        <Form.Item noStyle>
            <label className="w-96 flex self">{props.label}</label>
            <Form.Item className={`${props.className}`} name={props.name} style={props.styles} rules={props.rules}>
                <Select size={props.size} placeholder="Select Car Brand" onChange={handleChange}>
                    <Option value="skoda">Skoda</Option>
                    <Option value="vw">VW</Option>
                    <Option value="audi">Audi</Option>
                    <Option value="mercedes">Mercedes</Option>
                </Select>
            </Form.Item>
        </Form.Item>
    )
}
