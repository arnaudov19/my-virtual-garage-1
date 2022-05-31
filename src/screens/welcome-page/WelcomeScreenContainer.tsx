import React from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"
import LoginScreen from "../login/LoginScreen"

type Props = {
    LoginButtonClicked?: () => void
    CreateNewButtonClicked?: () => void
}

export const WelcomeScreenContainer = (props: Props) => {
    return (
        <div>
            <div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
    )
}
const styles = {
    backgroundColor: "bg-gray-500",
}
