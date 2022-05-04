// @flow
/*import "../styles/style.css"*/
import { Button, Form, Input } from "antd"
import Checkbox from "antd/es/checkbox/Checkbox"
import React, { useState } from "react"
import { LockClosedIcon } from "@heroicons/react/outline"

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
    const getUserEmail = (event) => {
        setUserEmail(event.target.value)
    }
    const getUserPassword = (event) => {
        setUserPass(event.target.value)
    }
    const userData = {
        userEmail: props.customerEmail,
        password: props.customerPassword,
    }
    const adminCredentials = {
        adminEmail: "admin",
        adminPassword: "admin",
    }
    console.log(userData)
    const [userEmail, setUserEmail] = useState("o")
    const [userPass, setUserPass] = useState("o")

    let customerCredentials = userData.userEmail === userEmail && userData.password === userPass
    const adminLogin = adminCredentials.adminEmail === userEmail && adminCredentials.adminPassword === userPass

    const validateUserCredentials = () => {
        if (customerCredentials) {
            console.log("Successful", userEmail, userPass)
            props.onSetPage(2)
        } else if (adminLogin) {
            console.log("Successful", userEmail, userPass)
            props.onSetPage(2)
        } else {
            console.log("Unsuccessful", userEmail, userPass)
            props.onSetPage(1)
        }
    }
    const forgottenPasswordHandler = () => {
        props.onSetPage(6)
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={require("../img/my-virtual-garage-logo.png")}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>

                <Form
                    className="mt-8 space-y-6"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Email!",
                                },
                            ]}>
                            <Input
                                className="hover:border-sky-400 focus:border-sky-500"
                                onChange={getUserEmail}
                                placeholder="Enter Your Email"
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
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                onClick={forgottenPasswordHandler}
                                className="font-medium text-sky-600 hover:text-sky-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={validateUserCredentials}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Sign in
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage
