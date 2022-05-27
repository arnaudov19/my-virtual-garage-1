import React from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"

type Props = {
    LoginButtonClicked?: () => void
    CreateNewButtonClicked?: () => void
}
export const WelcomeScreenContainer = (props: Props) => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 h-screen">
            <h1 className="text-5xl text-black-400 pb-12 text-center">Welcome to My Virtual Garage</h1>
            <div className="flex w-11/12 justify-evenly xl:w-6/12 xl:justify-around">
                <ButtonSmall label="Log in" onClick={props.LoginButtonClicked} />
                <ButtonSmall label="Create New" onClick={props.CreateNewButtonClicked} />
            </div>
        </div>
    )
}
