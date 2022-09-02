import React from "react"
import { ButtonGroup } from "../../../components/buttons/ButtonGroup"
import { FormSelectInput } from "../../../components/form-input-fields/FormSelectInput"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"
import { SCREEN_NAME } from "../../../router/rooterReducer"
import { Button, notification } from "antd"
import { connect } from "react-redux"
import { isAccountDetailNotificationClosed } from "./selectors"
import { notificationCloseBtnClicked } from "./actions"

type Props = {
    carBrand?: string
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

const AccountDetailedCarInfo = (props: Props) => {
    const openNotification = () => {
        notification.open({
            message: "Welcome, ",
            description: props.userEmail,
            duration: 10,
            //calling the function from dispatch
            onClose: () => props.onNotificationBtnClicked(),
        })
    }

    return (
        <AccountContainer>
            <>
                {!props.isNotificationClosed && props.screenName === "info" ? openNotification() : null}
                <span>{props.screenName}</span>
                <FormSelectInput optionsList={carBrands} className="w-96" label="Car Brand" />
                <FormTextInput className="w-96" label="Car Model" />
                <ButtonGroup onBackBtnClicked={props.onBackBtnClicked} />
            </>
        </AccountContainer>
    )
}

// REDUX BOILERPLATE
const mapStateToProps = (state: any) => ({
    isNotificationClosed: isAccountDetailNotificationClosed(state),
})

const mapDispatchToProps = {
    //Prop is calling the function
    onNotificationBtnClicked: notificationCloseBtnClicked,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(AccountDetailedCarInfo)
