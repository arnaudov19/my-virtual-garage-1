import React from "react"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"

type Props = {
    carBrand?: string
    onBackBtnClicked?: () => void
    onSaveBtnClicked?: () => void
    email?: string
    password?: string
}

export const AccountCredentials = (props: Props) => {
    let btnDisabled = true
    const inputChangeHandler = (event: any) => {
        const currentChange = event.target.value
    }

    return (
        <AccountContainer>
            <h1 className="text-2xl pb-6">User Credentials</h1>

            {/*TODO martin to FIX*/}


            {/*<FormTextInput label="Email" className="w-96" disabled={false} placeholder={props.email} />*/}
            {/*<FormItemPasswordInput label="Password" disabled={true} className="w-96" value={props.password} />*/}


            {/*<div className="w-96 pt-6 flex justify-around">*/}
            {/*    {btnDisabled ? (*/}
            {/*        <ButtonDisabled disabled={true} label="Save" />*/}
            {/*    ) : (*/}
            {/*        <ButtonMedium onClick={() => props.onSaveBtnClicked()} label="Save" />*/}
            {/*    )}*/}
            {/*</div>*/}
        </AccountContainer>
    )
}
