import React from "react"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    email?: string
    password?: string
    confirmPassword?: string
    carBrand?: string
    carModel?: string
    kmOnPurchase?: string
    price?: string
    fuelType?: string
    displacement?: string
    power?: string
    oilType?: string
    value?: string
}

export const UserProfileForm = (props: Props) => {
    return (
        <>
            <FormTextInput value={props.value} />
        </>
    )
}
