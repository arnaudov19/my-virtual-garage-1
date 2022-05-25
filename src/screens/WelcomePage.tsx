import React from "react"
import { ButtonSmall } from "../components/buttons/ButtonSmall"

type Props = {
    onSetPage: (page: number) => void
}

export const WelcomePage = (props: Props) => {
    const onLoginBtnClicked = () => {
        props.onSetPage(1)
    }

    const onCreateNewBtnClicked = () => {
        props.onSetPage(3)
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4 h-screen">
            <h1 className="text-5xl text-black-400 pb-12 text-center">Welcome to My Virtual Garage</h1>
            <div className="flex w-11/12 justify-evenly xl:w-6/12 xl:justify-around">
                <ButtonSmall label="Log in" onClick={onLoginBtnClicked} />
                <ButtonSmall label="Create New" onClick={onCreateNewBtnClicked} />
            </div>
        </div>
    )
}
