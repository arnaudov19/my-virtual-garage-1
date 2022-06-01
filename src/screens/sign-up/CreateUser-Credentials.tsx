import React, { useState } from "react"
import { Button as AntBtn, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { Button } from "../../components/buttons/Button"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"
import { TextInput } from "../../components/inputs/TextInput"
import { PasswordInput } from "../../components/inputs/PasswordInput"

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

    const getUserEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value)
    }
    const getUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value)
    }
    const getConfirmUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmUserPassword(event.target.value)
    }
    const onNextBtnClicked = (event: MouseEvent) => {
        event.preventDefault()
        props.onSetPage(4)
        props.userEmail(userEmail)
        props.password(userPassword)
        // storeToRedux()
        // store to inner state
    }
    const onBackBtnClicked = (event: MouseEvent) => {
        event.preventDefault()
        props.onSetPage(1)
    }
    return (
        <div className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
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
                        <TextInput
                            onChange={getUserEmail}
                            value={userEmail}
                            size="large"
                            inputType="text"
                            label="Email"
                            type="email"
                            placeholder="Enter Your Email"
                        />
                        <PasswordInput
                            value={userPassword}
                            onChange={getUserPassword}
                            placeholder="Enter Your Password"
                        />
                        <PasswordInput
                            onChange={getConfirmUserPassword}
                            value={confirmUserPassword}
                            placeholder="Confirm Your Passwor"
                        />
                    </Form>
                </div>
                <div className="w-96 flex justify-around">
                    <ButtonSimple onClick={() => onBackBtnClicked(event as MouseEvent)} label="Back" />
                    <ButtonSimple onClick={() => onNextBtnClicked(event as MouseEvent)} label="Next" />
                </div>
            </div>
        </div>
    )
}
export default CreateUserCredentials
