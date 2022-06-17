import React from "react"
import "../../img/my-virtual-garage-logo.png"
import { LoginForm, LoginFormValues } from "./LoginForm"
import { LoginSreenContainer } from "./LoginScreenContainer"

type Props = {
    currentPageLogin: number
    onSetPage: (page: number) => void
    customerEmail?: string
    customerPassword?: string
    image?: HTMLImageElement
    onCollectLoginData: (values: any) => void
}

const LoginPage = (props: Props): any => {
    const signInClicked = () => {
        props.onSetPage(1)
    }
    const forgottenPasswordClicked = () => {
        props.onSetPage(6)
    }
    const createAccBtnClicked = () => {
        props.onSetPage(2)
    }

    const collectLoginData = (values: LoginFormValues) => {
        props.onCollectLoginData(values)
        signInClicked()
    }

    return (
        <LoginSreenContainer>
            <LoginForm onSumbit={collectLoginData} />
            <div className="text-md flex justify-center">
                <a onClick={createAccBtnClicked} className="font-medium text-lg text-sky-600 hover:text-sky-500">
                    or Create Account
                </a>
            </div>
        </LoginSreenContainer>
    )
}

export default LoginPage
