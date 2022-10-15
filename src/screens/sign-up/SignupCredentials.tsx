import React from "react"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { SignupContainer } from "./SignupContainer"
import { CreateUserForm, SignupFormValues } from "./forms/CredentialsForm"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { getCurrentScreenName } from "../../router/selectors"
import { connect } from "react-redux"
import { useRouter } from "next/router"
import { routerScreenChanged } from "../../router/actions"
import { backBtnClicked, nextBtnClickedCredentials } from "./actions"
import { getSignedUpCredentialsData } from "./selectors"

type Props = {
    screenChange: (screenName: SCREEN_NAME) => void
    onCollectSignUpData: (values: any) => void
    onNextBtnClicked: (email: string, password: string) => void
    onBackBtnClicked: () => void
}

const SignupCredentials = (props: Props) => {
    const router = useRouter()

    const onNextBtnClicked = () => {
        props.screenChange(SCREEN_NAME.SIGN_UP_GENERAL)
        router.push("./signup-general")
    }
    const onBackBtnClicked = () => {
        props.screenChange(SCREEN_NAME.LOGIN)
        props.onBackBtnClicked()
        router.push("./login")
    }
    const onCollectSignupData = (values: SignupFormValues) => {
        props.onNextBtnClicked(values.email, values.password)
        onNextBtnClicked()
    }
    return (
        <SignupContainer>
            <ProgressSteps currentStep={1} />
            <div className="flex justify-center gap-6">
                <CreateUserForm onSumbit={onCollectSignupData} onBackBtnClicked={onBackBtnClicked} />
            </div>
        </SignupContainer>
    )
}

const mapStateToProps = (state: any) => ({
    screenChange: getCurrentScreenName(state),
    onCollectSignUpData: getSignedUpCredentialsData(state),
})

const mapDispatchToProps = {
    screenChange: routerScreenChanged,
    onNextBtnClicked: nextBtnClickedCredentials,
    onBackBtnClicked: backBtnClicked,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupCredentials)
