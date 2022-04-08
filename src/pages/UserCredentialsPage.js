import React, { useState } from "react"
import "../styles/style.css"
import { Button, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../reusable-components/ProgressSteps"
import { CustomInputField } from "../reusable-components/CustomInputField"
import CustomPasswordInputField from "../reusable-components/CustomPasswordInputField"
import LoginPage from "./LoginPage"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void,
    userEmail: string,
    password: string,
}

const UserCredentialsPage = (props: Props) => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("")

    const getUserEmail = (event) => {
        setUserEmail(event.target.value)
    }
    const getUserPassword = (event) => {
        setUserPassword(event.target.value)
    }
    const getConfirmUserPassword = (event) => {
        setConfirmUserPassword(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted")
        props.onSetPage(4)
        props.userEmail(userData.email)
        props.password(userData.password)
        setUserEmail("")
        setUserPassword("")
        setConfirmUserPassword("")
    }
    const userData = {
        email: userEmail,
        password: userPassword,
        confirmPass: confirmUserPassword,
    }
    console.log("pico", userData)
    return (
        <div className="signup-form-container">
            <ProgressSteps currentStep={0} />
            <div className="input-fields-signup-container">
                <form
                    onSubmit={submitHandler}
                    style={{
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <CustomInputField
                        onChange={getUserEmail}
                        value={userEmail}
                        size="large"
                        inputType="text"
                        label="Email"
                        placeholder="Enter Your Email"
                    />
                    <CustomPasswordInputField
                        onChange={getUserPassword}
                        value={userPassword}
                        size="large"
                        type="password"
                        label="Password"
                        placeholder="Enter Your Password"
                        name="password"
                    />
                    <CustomPasswordInputField
                        onChange={getConfirmUserPassword}
                        value={confirmUserPassword}
                        size="large"
                        label="Confirm Password"
                        placeholder="Confirm Your Password"
                        name="confirm-password"
                    />
                    <Form.Item>
                        <Button htmlType="submit" size="large" type="primary">
                            Next
                        </Button>
                    </Form.Item>
                </form>
                <div>
                    <p>{userEmail}</p>
                    <p>{userPassword}</p>
                    <p>{confirmUserPassword}</p>
                </div>
            </div>
        </div>
    )
}
export default UserCredentialsPage
