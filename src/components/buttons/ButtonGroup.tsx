import React from "react"
import { ButtonMedium } from "./ButtonMedium"

type Props = {
    onNextBtnClicked?: () => void
    onBackBtnClicked?: () => void
}

export const ButtonGroup = (props: Props) => {
    return (
        <div className="w-96 pt-6 flex justify-around">
            <ButtonMedium onClick={props.onBackBtnClicked} label="Back" />
            <ButtonMedium onClick={props.onNextBtnClicked} label="Next" />
        </div>
    )
}
