import { Form } from "antd"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import React from "react"
import { Button } from "../../components/buttons/Button"
import { LockClosedIcon } from "@heroicons/react/solid"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { getConsoleOutput } from "@jest/console"

type Props = {
    onSubmitBtnClicked: (values: LoginFormValues) => void
}

export type LoginFormValues = {
    email: string
    password: string
}

export const LoginForm = (props: Props) => {
    const handleSubmit = (values: LoginFormValues) => {
        props.onSubmitBtnClicked(values)
        console.log("values", values)
    }
    const handleSubmitFailed = (errorInfo: any) => {
        console.log("Fail", errorInfo)
    }

    return (
        <Form
            className="mt-8"
            autoComplete="on"
            onFinish={handleSubmit}
            validateTrigger={"onBlur"}
            onFinishFailed={handleSubmitFailed}>
            <FormTextInput
                className="w-96 mt-1"
                placeholder="Enter Your Email"
                label="Email"
                name="email"
                size="large"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                ]}
            />
            <FormItemPasswordInput
                className="w-96 mt-1"
                placeholder="Enter Your Password"
                label="Password"
                size="large"
                name="password"
                rules={[
                    {
                        required: true,
                        type: "password",
                        message: "The input is not valid password!",
                    },
                ]}
            />

            <Button
                className="mt-2"
                label="Sign in"
                prefixIcon={
                    <LockClosedIcon className="h-5 w-5 text-sky-500 group-hover:text-sky-400" aria-hidden="true" />
                }
            />
        </Form>
    )
}
