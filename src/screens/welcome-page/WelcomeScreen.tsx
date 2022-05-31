import React, { useState } from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"
import LoginScreen from "../login/LoginScreen"
import { WelcomeScreenContainer } from "./WelcomeScreenContainer"

type Props = {
    onSetPage: (page: number) => void
}

export const WelcomeScreen = (props: Props) => {
    const onLoginBtnClicked = () => {
        props.onSetPage(1)
    }

    const onCreateNewBtnClicked = () => {
        props.onSetPage(3)
    }

    return (
        <div>
            <WelcomeScreenContainer />
        </div>
    )
}
