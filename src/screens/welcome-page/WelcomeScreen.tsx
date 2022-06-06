import React from "react"
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
