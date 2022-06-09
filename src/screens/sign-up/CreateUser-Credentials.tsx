import React, { useState } from "react"
import { Button as AntBtn, Form, Input, Steps } from "antd"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { Button } from "../../components/buttons/Button"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"
import { CreateUserContainer } from "./CreateUserContainer"
import { CreateUserForm, SignupFormValues } from "./forms/CredentialsForm"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    onCollectSignupData: (values: any) => void
    email: string
    password: string
    confirmPassword: string
}

export const CreateUserCredentials = (props: Props) => {
    const onNextBtnClicked = () => {
        props.onSetPage(3)
    }
    const onBackBtnClicked = (page: number) => {
        props.onSetPage(page)
    }
    const onCollectSignupData = (values: SignupFormValues) => {
        props.onCollectSignupData(values)
        onNextBtnClicked()
    }

    return (
        <CreateUserContainer>
            <ProgressSteps currentStep={0} />
            <div className="flex justify-center gap-6">
                <CreateUserForm onSetPage={(page: number) => onBackBtnClicked(page)} onSumbit={onCollectSignupData} />
            </div>
        </CreateUserContainer>
    )
}
