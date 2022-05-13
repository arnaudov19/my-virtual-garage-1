import React, { useState } from "react"
import { Button, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../components/ProgressSteps"
import { CustomInputField } from "../components/CustomInputField"
import CustomPasswordInputField from "../components/CustomPasswordInputField"
import LoginPage from "./LoginPage"
import { ArrowLeftOutlined } from "@ant-design/icons"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void
    userEmail: (email: string) => void
    password: (password: string) => void
    currentPageLogin: number
}

const UserCredentialsPage = (props: Props) => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("")

    const getUserEmail = (event: any) => {
        setUserEmail(event.target.value)
    }
    const getUserPassword = (event: any) => {
        setUserPassword(event.target.value)
    }
    const getConfirmUserPassword = (event: any) => {
        setConfirmUserPassword(event.target.value)
    }
    const nextPageHandler = (event: any) => {
        event.preventDefault()
        props.onSetPage(4)
        props.userEmail(userEmail)
        props.password(userPassword)
    }
    const backPageHandler = (event: any) => {
        event.preventDefault()
        props.onSetPage(0)
    }
    return (
        <div className="signup-form-container flex flex-col items-center justify-center">
            <div className="h-5/6 w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-lg shadow-2xl">
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
                    </Form>
                </div>
                <div style={{ width: "300px", display: "flex", justifyContent: "space-around" }}>
                    <button
                        onClick={backPageHandler}
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Back
                    </button>
                    <button
                        onClick={nextPageHandler}
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
export default UserCredentialsPage
