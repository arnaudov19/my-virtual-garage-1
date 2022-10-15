import React from "react"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { FormItemPasswordInput } from "../../../components/form-input-fields/FormItemPasswordInput"
import { ButtonDisabled } from "../../../components/buttons/ButtonDisabled"
import { ButtonMedium } from "../../../components/buttons/ButtonMedium"
import { Form } from "antd"
import { getCurrentScreenName } from "../../../router/selectors"
import { getSignedUpDataEmail } from "../../sign-up/selectors"
import { connect } from "react-redux"
import { getLoggedInUser } from "../../login/selectors"

type Props = {
    carBrand?: string
    onBackBtnClicked?: () => void
    onSaveBtnClicked?: () => void
    loggedEmail?: string
    signedUpEmail?: string
}

const AccountCredentials = (props: Props) => {
    //todo enable button, if there is some input
    const shouldDisableSaveButton = (): boolean => {
        return false
    }

    console.log("signedUp email: ", props.signedUpEmail)
    return (
        <AccountContainer>
            <h1 className="text-2xl pb-6">User Credentials</h1>
            <Form>
                <FormTextInput
                    label="Email"
                    className="w-96"
                    disabled={true}
                    placeholder={props.signedUpEmail}
                    initialValue={props.signedUpEmail}
                />
                <FormItemPasswordInput label="Old password" disabled={false} className="w-96" />
                <FormItemPasswordInput label="New Password" disabled={false} className="w-96" />
                <FormItemPasswordInput label="Confirm New Password" disabled={false} className="w-96" />
            </Form>
            <div className="w-96 pt-6 flex justify-around">
                <ButtonDisabled disabled={true} label="Edit" />
                <ButtonMedium onClick={() => props.onSaveBtnClicked} label="Save" />
            </div>
        </AccountContainer>
    )
}
const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
    signedUpEmail: getSignedUpDataEmail(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AccountCredentials)
