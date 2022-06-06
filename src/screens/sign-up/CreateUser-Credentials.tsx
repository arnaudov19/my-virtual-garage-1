import React, { useState } from "react"
import { Button as AntBtn, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { Button } from "../../components/buttons/Button"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"
import { TextInput } from "../../components/inputs/TextInput"
import { PasswordInput } from "../../components/inputs/PasswordInput"
import { CreateUserContainer } from "./CreateUserContainer"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void
    email: (email: string) => void
    password: (password: string) => void
    confirmPassword: (confPassword: string) => void
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
        props.email(userEmail)
        props.password(userPassword)
        props.confirmPassword(confirmUserPassword)
        // storeToRedux()
        // store to inner state
        console.log(userEmail)
    }
    const onBackBtnClicked = (event: MouseEvent) => {
        event.preventDefault()
        props.onSetPage(1)
    }
    return (
        <CreateUserContainer>
            <ProgressSteps currentStep={0} />
            <div className="input-fields-signup-container">
                <Form className="w-4/6 flex flex-col items-center">
                    <TextInput
                        onChange={getUserEmail}
                        value={userEmail}
                        size="large"
                        inputType="text"
                        label="Email"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <PasswordInput onChange={getUserPassword} placeholder="Enter Your Password" value={userPassword} />
                    <PasswordInput
                        onChange={getConfirmUserPassword}
                        placeholder="Confirm Your Password"
                        value={confirmUserPassword}
                    />
                </Form>
            </div>
            <div className="w-96 flex justify-around">
                <ButtonSimple onClick={() => onBackBtnClicked(event as MouseEvent)} label="Back" />
                <ButtonSimple onClick={() => onNextBtnClicked(event as MouseEvent)} label="Next" />
            </div>
        </CreateUserContainer>
    )
}
export default CreateUserCredentials
