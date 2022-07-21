import { Form } from "antd"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import React from "react"
import { Button } from "../../components/buttons/Button"
import { LockClosedIcon } from "@heroicons/react/solid"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { connect } from "react-redux"
import { loginBtnClicked } from "./actions"
import { routerScreenChanged } from "../../router/actions"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { useRouter } from "next/router"

type Props = {
    onSumbit: (values: LoginFormValues) => void
    onLoginBtnClicked: (email: string, password: string) => void
    screenChange: (screen: SCREEN_NAME) => void
}

export type LoginFormValues = {
    email: string
    password: string
}

const LoginForm = (props: Props) => {
    const router = useRouter()

    const handleSubmit = (values: LoginFormValues) => {
        // TODO MOST IMPORTANTEST EVER IN THE WORLD
        //  DO WHATEVER YOU WANT WITH DATA

        console.log("Success:", values)
        props.onSumbit(values)
        props.onLoginBtnClicked(values.email, values.password)
        props.screenChange(SCREEN_NAME.INFO)

        router.push("/info")
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

// CONECTING TO REDUX
const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {
    onLoginBtnClicked: loginBtnClicked,
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
