import React, { useState } from "react"
import { Button as AntBtn, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../../components/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { Button } from "../../components/buttons/Button"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void
    userEmail: (email: string) => void
    password: (password: string) => void
    currentPage: number
}

const CreateUserCredentials = (props: Props) => {
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
    const onNextBtnClicked = (event: any) => {
        event.preventDefault()
        props.onSetPage(4)
        props.userEmail(userEmail)
        props.password(userPassword)

        // storeToRedux()
        // store to inner state
    }
    const onBackBtnClicked = (event: any) => {
        event.preventDefault()
        props.onSetPage(1)
    }
    return (
        <div className="signup-form-container bg-gray-200 flex flex-col items-center justify-center">
            <div className="bg-white h-5/6 w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-lg shadow-2xl">
                <ProgressSteps currentStep={0} />
                <div className="input-fields-signup-container">
                    <Form
                        style={{
                            width: "60%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <FormTextInput
                            onChange={getUserEmail}
                            value={userEmail}
                            size="large"
                            inputType="text"
                            label="Email"
                            placeholder="Enter Your Email"
                        />
                        <FormItemPasswordInput
                            onChange={getUserPassword}
                            value={userPassword}
                            size="large"
                            type="password"
                            label="Password"
                            placeholder="Enter Your Password"
                            name="password"
                        />
                        <FormItemPasswordInput
                            onChange={getConfirmUserPassword}
                            value={confirmUserPassword}
                            size="large"
                            label="Confirm Password"
                            placeholder="Confirm Your Password"
                            name="confirm-password"
                        />
                    </Form>
                </div>
                <div className="w-96 flex justify-around">
                    <ButtonSimple onClick={onBackBtnClicked} label="Back" />
                    <ButtonSimple onClick={onNextBtnClicked} label="Next" />
                </div>
            </div>
        </div>
    )
}
export default CreateUserCredentials
