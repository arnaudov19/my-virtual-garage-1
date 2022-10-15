import React from "react"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { FormItemPasswordInput } from "../../../components/form-input-fields/FormItemPasswordInput"
import { ButtonDisabled } from "../../../components/buttons/ButtonDisabled"
import { ButtonMedium } from "../../../components/buttons/ButtonMedium"
import { Form } from "antd"

type Props = {
    carBrand?: string
    onBackBtnClicked?: () => void
    onSaveBtnClicked?: () => void
    loggedEmail: string
}

export const AccountCredentials = (props: Props) => {
    //enable button, if there is some input
    const shouldDisableSaveButton = (): boolean => {
        return false
    }

    console.log("logged in email: ", props.loggedEmail)
    return (
        <AccountContainer>
            <h1 className="text-2xl pb-6">User Credentials</h1>
            <Form>
                <FormTextInput label="Email" className="w-96" disabled={true} value={props.loggedEmail} />
                <FormItemPasswordInput label="Old password" disabled={false} className="w-96" />
                <FormItemPasswordInput label="New Password" disabled={false} className="w-96" />
                <FormItemPasswordInput label="Confirm New Password" disabled={false} className="w-96" />
            </Form>
            <div className="w-96 pt-6 flex justify-around">
                {shouldDisableSaveButton() ? (
                    <ButtonDisabled disabled={true} label="Save" />
                ) : (
                    <ButtonMedium onClick={() => props.onSaveBtnClicked} label="Save" />
                )}
            </div>
        </AccountContainer>
    )
}
