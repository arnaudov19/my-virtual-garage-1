import React from "react"
import { ButtonSmall } from "./ButtonSmall"

type Props = {
    onNextBtnClicked?: () => void
    onBackBtnClicked?: () => void
}

export const ButtonGroup = (props: Props) => {
    return (
        <div className="w-96 pt-6 flex justify-around">
            <ButtonSmall onClick={props.onBackBtnClicked} label="Back" />
            <ButtonSmall onClick={props.onNextBtnClicked} label="Next" />
        </div>
    )
}
