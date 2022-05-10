import React, {useState} from "react";
import {Form, Input, InputNumber} from 'antd';

const CustomNumberInputField = (props) => {

    return (
        <Form.Item
            style={{display:"flex",justifyContent:"center", width:"300px"}}
        >
            <label>{props.label}</label>
            <InputNumber style={{width:"100%"}} onChange={props.onChange} type={props.inputType} value={props.value} name={props.name} size={props.size} placeholder={props.placeholder}/>
        </Form.Item>    )
}

export default CustomNumberInputField;