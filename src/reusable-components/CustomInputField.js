import React from "react";
import {Form, Input} from "antd";

export const CustomInputField = (props) => {
    return (
        <Form.Item
            style={{display:"flex",justifyContent:"center", width:"300px"}}
        >
            <label>{props.label}</label>
            <Input onChange={props.onChange} type={props.inputType} value={props.value} name={props.name} size={props.size} placeholder={props.placeholder}/>
        </Form.Item>
    )
}