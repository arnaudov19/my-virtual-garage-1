import { Form, Input } from "antd"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import React from "react"
import { Button } from "../../components/buttons/Button"
import { LockClosedIcon } from "@heroicons/react/solid"

type Props = {
    onSumbit: (values: LoginFormValues) => void
}

export type LoginFormValues = {
    name: string
    email: string
}

export const LoginForm = (props: Props) => {
    const handleSubmit = (values: LoginFormValues) => {
        // TODO MOST IMPORTANTEST EVER IN THE WORLD
        //  DO WHATEVER YOU WANT WITH DATA

        console.log("Success:", values)
        props.onSumbit(values)

        // STORE LOGIN INFO
        // dispatch(storeLoginInfoRequested(values))
    }
    const handleSubmitFailed = (errorInfo: any) => {
        console.log("Fail", errorInfo)
    }

    return (
        <Form
            className="mt-8 space-y-6"
            autoComplete="off"
            onFinish={handleSubmit}
            validateTrigger={"onBlur"}
            onFinishFailed={handleSubmitFailed}>
            <FormTextInput name="username" placeholder="name" />
            <FormTextInput name="phone" placeholder="phone" />
            <FormTextInput
                placeholder="email"
                name="email"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                ]}
            />

            <Button
                label="Sign in"
                prefixIcon={
                    <LockClosedIcon className="h-5 w-5 text-sky-500 group-hover:text-sky-400" aria-hidden="true" />
                }
            />
        </Form>
    )
}
