import React from "react"
import { ButtonGroup } from "../../../components/buttons/ButtonGroup"
import { FormSelectInput } from "../../../components/form-input-fields/FormSelectInput"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"
import { SCREEN_NAME } from "../../../router/rooterReducer"
import { SimpleNotification } from "../../../components/notifications/SimpleNotifications"
import { LoginState } from "../../login/reducer"
import { notification } from "antd"

type Props = {
    carBrand?: string
    carModel?: string
    userEmail?: string
    screenName: SCREEN_NAME
    isCustomerLoggedIn: boolean
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
    const openNotification = () => {
        const args = {
            message: "Welcome, ",
            description: props.userEmail,
            duration: 4.5,
        }
        notification.open(args)
    }

    return (
        <AccountContainer>
            <>
                {props.isCustomerLoggedIn && props.screenName === "info" ? openNotification() : null}
                {/*<SimpleNotification userEmail={props.userEmail} />*/}
                <span>{props.screenName}</span>
                <FormSelectInput optionsList={carBrands} className="w-96" label="Car Brand" />
                <FormTextInput className="w-96" label="Car Model" />
                <ButtonGroup onBackBtnClicked={props.onBackBtnClicked} />
            </>
        </AccountContainer>
    )
}
