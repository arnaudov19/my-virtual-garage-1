import React from "react"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { SignupContainer } from "./SignupContainer"
import { CreateUserForm, SignupFormValues } from "./forms/CredentialsForm"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    onCollectSignupData: (values: any) => void
    email: string
    password: string
    confirmPassword: string
}

export const SignupCredentials = (props: Props) => {
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
        <SignupContainer>
            <ProgressSteps currentStep={0} />
            <div className="flex justify-center gap-6">
                <CreateUserForm onSetPage={(page: number) => onBackBtnClicked(page)} onSumbit={onCollectSignupData} />
            </div>
        </SignupContainer>
    )
}
