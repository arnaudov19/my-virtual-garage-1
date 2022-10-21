import React from "react"
import { ButtonGroup } from "../../../components/buttons/ButtonGroup"
import { FormSelectInput } from "../../../components/form-input-fields/FormSelectInput"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"
import { SCREEN_NAME } from "../../../router/rooterReducer"
import { notification } from "antd"
import { connect } from "react-redux"
import { getSignedUpGeneralDataBrand, getSignedUpGeneralDataModel } from "../../sign-up/selectors"
import { getCurrentScreenName } from "../../../router/selectors"
import { getLoggedInUser, getUserEmail } from "../../login/selectors"
import { loginBtnClicked } from "../../login/actions"
import { routerScreenChanged } from "../../../router/actions"
import { isAccountDetailNotificationClosed } from "./selectors"
import { notificationCloseBtnClicked } from "./actions"

type Props = {
    carBrand: string
    carModel?: string
    userEmail?: string
    screenName: SCREEN_NAME
    onScreenChange: (screen: SCREEN_NAME) => void
    onNotificationBtnClicked: () => void
    isNotificationClosed: boolean
    isCustomerLoggedIn?: boolean
    onBackBtnClicked?: () => void
    onSaveBtnClicked?: () => void
}
const carBrands = [
    { brand: "skoda", name: "Skoda", id: 1 },
    { brand: "audi", name: "Audi", id: 2 },
    { brand: "vw", name: "VW", id: 3 },
    { brand: "mercedes", name: "Mercedes", id: 4 },
]

const AccountGeneralCarInfo = (props: Props) => {
    const openNotification = () => {
        notification.open({
            message: "Welcome, ",
            description: props.userEmail,
            duration: 10,
            onClose: () => props.onNotificationBtnClicked(),
        })
    }

    return (
        <AccountContainer>
            <>
                {!props.isNotificationClosed && props.screenName === "general" ? openNotification() : null}
                <h1 className="text-2xl pb-6">General Car Data</h1>
                <FormSelectInput value={props.carBrand} optionsList={carBrands} className="w-96" label="Car Brand" />
                <FormTextInput value={props.carModel} className="w-96" label="Car Model" />
                <ButtonGroup onBackBtnClicked={props.onBackBtnClicked} />
            </>
        </AccountContainer>
    )
}

const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
    userinfo: getLoggedInUser(state),
    userEmail: getUserEmail(state),
    isLoggedIn: getLoggedInUser(state),
    carBrand: getSignedUpGeneralDataBrand(state),
    carModel: getSignedUpGeneralDataModel(state),
    isNotificationClosed: isAccountDetailNotificationClosed(state),
})

const mapDispatchToProps = {
    onLoginBtnClicked: loginBtnClicked,
    screenChange: routerScreenChanged,
    onNotificationBtnClicked: notificationCloseBtnClicked,
}
export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(AccountGeneralCarInfo)
