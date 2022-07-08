import React, { useState } from "react"
import { ButtonSmall } from "../buttons/ButtonSmall"
import { FormTextInput } from "../form-input-fields/FormTextInput"
import { TextInput } from "../inputs/TextInput"
import { ListContainer } from "../lists/ListContainer"

type Props = {
    onClick: () => void
    inputValue: string
}
export const FormModal = (props: Props) => {
    const [currentValue, setCurrentValue] = useState("")

    console.log("my value", currentValue)
    return (
        <div className="flex flex-col justify-center items-center w-3/6 h-96 ">
            <TextInput size="large" />
            <ButtonSmall label="Add" onClick={props.onClick} />
        </div>
    )
}
