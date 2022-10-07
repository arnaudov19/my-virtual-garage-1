import { Form } from "antd"
import React from "react"
import { FormItemPasswordInput } from "../../../components/form-input-fields/FormItemPasswordInput"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { ButtonMedium } from "../../../components/buttons/ButtonMedium"

type Props = {
    onSumbit: (values: SignupFormValues) => void
    onBackBtnClicked: () => void
}

export type SignupFormValues = {
    email: string
    password: string
    confirmPassword: string
}

export const CreateUserForm = (props: Props) => {
    const handleSubmit = (values: SignupFormValues) => {
        console.log("Success:", values)
        props.onSumbit(values)
    }
    const handleSubmitFailed = (errorInfo: any) => {
        console.log("Fail", errorInfo)
    }
    const onBackBtnClicked = () => {
        props.onBackBtnClicked
    }

    return (
        <div className="w-4/6 flex flex-col items-center justify-between">
            <Form className="" onFinish={handleSubmit} validateTrigger={"onBlur"} onFinishFailed={handleSubmitFailed}>
                <FormTextInput
                    placeholder="Enter Your Email"
                    className="w-96"
                    size="large"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "The input is not a valid E-mail!",
                        },
                    ]}
                />
                <FormItemPasswordInput
                    className="w-96"
                    placeholder="Enter Your Password"
                    size="large"
                    name="password"
                />
                <FormItemPasswordInput
                    className="w-96"
                    placeholder="Confirm Your Password"
                    size="large"
                    name="confirmPassword"
                />
                <div className="flex justify-around w-96 pt-14">
                    <ButtonMedium onClick={onBackBtnClicked} label="Back" />
                    <ButtonMedium label="Next" />
                </div>
            </Form>
        </div>
    )
}
