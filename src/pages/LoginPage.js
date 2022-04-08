// @flow
import "../styles/style.css"
import { Button, Form, Input } from "antd"
import Checkbox from "antd/es/checkbox/Checkbox"
import React, { useState } from "react"

type Props = {
    currentPageLogin: number,
    onSetPage: (page: number) => void,
    customerEmail: string,
    customerPassword: string,
}

const LoginPage = (props: Props): any => {
    const onFinish = (values) => {
        console.log("Success:", values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo)
    }
    const getUserName = (event) => {
        setUserEmail(event.target.value)
    }
    const getUserPassword = (event) => {
        setUserPass(event.target.value)
    }
    const userData = {
        username: props.customerEmail,
        password: props.customerPassword,
    }
    const adminCredentials = {
        username: "admin",
        password: "admin",
    }
    console.log(userData)
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")

    let customerCredentials = userData.username === userEmail && userData.password === userPass
    const adminLogin = adminCredentials.username === userEmail && adminCredentials.password === userPass

    const validateUserCredentials = () => {
        if (customerCredentials || adminLogin) {
            console.log("Successful", userEmail, userPass)
            props.onSetPage(2)
        } else {
            console.log("Unsuccessful", userEmail, userPass)
        }
    }
    const forgottenPasswordHandler = () => {
        props.onSetPage(6);
    }
    return (
        <div className="signup-form-container" style={{ width: "450px", height: "350px" }}>
            <Form
                name="login"
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your userEmail!",
                        },
                    ]}>
                    <Input
                        className="hover:border-lime-400 focus:border-lime-500"
                        onChange={getUserName}
                        placeholder="Enter Your Username"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password onInput={getUserPassword} placeholder="Enter Your Password" size="large" />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 4,
                        span: 24,
                    }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button size="large"
                            htmlType="submit"
                            className="bg-lime-500 hover:bg-lime-400 border-lime-500 hover:border-lime-400"
                            onClick={forgottenPasswordHandler}>
                       Reset Pass
                    </Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <Button
                        size="large"
                        htmlType="submit"
                        className="bg-lime-500 hover:bg-lime-400 border-lime-500 hover:border-lime-400"
                        type="primary"
                        onClick={validateUserCredentials}>
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage
