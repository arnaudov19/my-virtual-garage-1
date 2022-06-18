import React from "react"
import { ButtonSet } from "../../components/buttons/ButtonSet"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { FormSelectInput } from "../../components/form-input-fields/FormSelectInput"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "./AccountFormContainer"

type Props = {
    carBrand?: string
    onBackBtnClicked?: () => void
    onSaveBtnClicked?: () => void
    email?: string
    password?: string
    confirmPassword?: string
}

export const AccountCredentials = (props: Props) => {
    return (
        <AccountContainer>
            <h1 className="text-2xl pb-6">User Credentials</h1>
            <FormTextInput label="Email" className="w-96" disabled={true} value={props.email} />
            <FormItemPasswordInput label="Password" disabled={true} className="w-96" value={props.password} />
            <FormItemPasswordInput
                label="Confirm Password"
                disabled={true}
                className="w-96"
                value={props.confirmPassword}
            />
            <ButtonSet onBackBtnClicked={props.onBackBtnClicked} />
        </AccountContainer>
    )
}
