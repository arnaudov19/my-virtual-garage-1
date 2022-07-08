import React from "react"
import { ButtonGroup } from "../../components/buttons/ButtonGroup"
import { FormSelectInput } from "../../components/form-input-fields/FormSelectInput"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "./AccountFormContainer"

type Props = {
    carBrand?: string
    carModel?: string
    onBackBtnClicked?: () => void
    onSaveBtnClicked?: () => void
}

const carBrands = [
    { brand: "skoda", name: "Skoda", id: 1 },
    { brand: "audi", name: "Audi", id: 2 },
    { brand: "vw", name: "VW", id: 3 },
    { brand: "mercedes", name: "Mercedes", id: 4 },
]

export const AccountDetailedCarInfo = (props: Props) => {
    return (
        <AccountContainer>
            <FormSelectInput optionsList={carBrands} className="w-96" label="Car Brand" />
            <FormTextInput className="w-96" label="Car Model" />
            <ButtonGroup onBackBtnClicked={props.onBackBtnClicked} />
        </AccountContainer>
    )
}