import React, { useState } from "react"
import "../styles/style.css"
import { Button, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../components/ProgressSteps"
import { CustomInputField } from "../components/CustomInputField"
import CustomPasswordInputField from "../components/CustomPasswordInputField"
import LoginPage from "./LoginPage"
import { ArrowLeftOutlined } from "@ant-design/icons"

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
    const nextPageHandler = (event) => {
        event.preventDefault()
        props.onSetPage(4)
    }
    const backPageHandler = (event) => {
        event.preventDefault()
        props.onSetPage(0)
    }
    return (
        <div className="signup-form-container">
            <ProgressSteps currentStep={0} />
            <div className="input-fields-signup-container">
                <Form
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
                    <div style={{ width: "300px", display: "flex", justifyContent: "space-around" }}>
                        <button
                            onClick={backPageHandler}
                            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                            Back
                        </button>
                        <button
                            onClick={nextPageHandler}
                            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                            Next
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default UserCredentialsPage
