import React from "react"
import "../../img/my-virtual-garage-logo.png"

import { LoginScreenContainer } from "./LoginScreenContainer"
import { loginBtnClicked } from "./actions"
import { routerScreenChanged } from "../../router/actions"
import { connect } from "react-redux"
import { useRouter } from "next/router"
import { LoginForm, LoginFormValues } from "./LoginForm"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { getLoggedInUser } from "./selectors"
import { createAccountBtnClicked } from "../sign-up/actions"

type Props = {
    onLoginBtnClicked: (email: string, password: string) => void
    screenChange: (screenName: SCREEN_NAME) => void
    onCollectLoginData: (values: any) => void
    onCreateAccountBtnClicked: () => void
}

const LoginScreen = (props: Props): any => {
    const router = useRouter()

    const collectLoginData = (values: LoginFormValues) => {
        props.onLoginBtnClicked(values.email, values.password)
        props.screenChange(SCREEN_NAME.INFO)
        router.push("/info")
    }

    const createAccBtnClicked = () => {
        console.log("create account btn clicked: ")
        props.onCreateAccountBtnClicked()
        props.screenChange(SCREEN_NAME.SIGN_UP_CREDENTIALS)
        router.push("./signup-credentials")
    }

    return (
        <LoginScreenContainer>
            <LoginForm onSubmitBtnClicked={collectLoginData} />
            <div className="text-md flex justify-center">
                <a onClick={createAccBtnClicked} className="font-medium text-lg text-sky-600 hover:text-sky-500">
                    or Create Account
                </a>
            </div>
        </LoginScreenContainer>
    )
}

const mapStateToProps = (state: any) => ({
    onLoginBtnClicked: getLoggedInUser(state),
})

const mapDispatchToProps = {
    onLoginBtnClicked: loginBtnClicked,
    screenChange: routerScreenChanged,
    onCreateAccountBtnClicked: createAccountBtnClicked,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(LoginScreen)
