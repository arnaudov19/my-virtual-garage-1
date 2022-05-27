import { Form, Input, Button as AntButton } from "antd"
import CreateUserCredentials from "../sign-up/CreateUser-Credentials"
import React, { SyntheticEvent, useState } from "react"
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/outline"
import "../../img/my-virtual-garage-logo.png"
import { Button } from "../../components/buttons/Button"
import { LeftCircleOutlined, UpCircleOutlined } from "@ant-design/icons"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { PasswordInput } from "../../components/inputs/PasswordInput"
import { TextInput } from "../../components/inputs/TextInput"

type Props = {
    currentPageLogin: number
    onSetPage: (page: number) => void
    customerEmail: string
    customerPassword: string
}

const LoginPage = (props: Props): any => {
    const onFinish = (values: SyntheticEvent) => {
        console.log("Success:", values)
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }
    const getUserEmail = (event: any) => {
        setUserEmail(event.target.value)
    }
    const getUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPass(event.target.value)
    }

    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")

    const signInClicked = () => {
        props.onSetPage(2)
    }
    const forgottenPasswordClicked = () => {
        props.onSetPage(6)
    }
    const backButtonClicked = () => {
        props.onSetPage(2)
    }
    return (
        <div className="flex justify-center items-center flex-col gap-4 h-screen">
            <LeftCircleOutlined
                onClick={backButtonClicked}
                className="absolute left-10 top-10 text-4xl text-sky-600 hover:text-sky-700 focus:text-sky-500"
            />
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
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
                                <TextInput
                                    onChange={getUserEmail}
                                    type="email"
                                    size="large"
                                    placeholder="Enter Your Email"
                                    value={userEmail}
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
                                <PasswordInput
                                    onChange={getUserPassword}
                                    type="password"
                                    size="large"
                                    placeholder="Enter Your Password"
                                    value={userPass}
                                />
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
                                <label htmlFor="remember-me" className="ml-2 block text-md text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-md">
                                <a
                                    onClick={forgottenPasswordClicked}
                                    className="font-medium text-sky-600 hover:text-sky-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button
                                onClick={signInClicked}
                                label="Sign in"
                                prefixIcon={
                                    <LockClosedIcon
                                        className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                                        aria-hidden="true"
                                    />
                                }
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
