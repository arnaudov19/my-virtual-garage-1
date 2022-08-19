import React from "react"
import { ButtonGroup } from "../../../components/buttons/ButtonGroup"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"

type Props = {
    onBackBtnClicked?: () => void
}

export const AccountGeneralCarInfo = (props: Props) => {
    return (
        <AccountContainer>
            <h1 className="text-2xl pb-6">General Car Data</h1>
            <div>
                <FormTextInput disabled={true} name="kmOnPurchase" label="Kilometres on Purchase" placeholder="59000" />
                <FormTextInput disabled={true} name="price" label="Price" placeholder="4000$" />
                <FormTextInput disabled={true} name="fuelType" label="Fuel Type" placeholder="Diesel, Gasoline.." />
            </div>
            <div>
                <FormTextInput disabled={true} name="displacement" label="Displacement" placeholder="1998cc" />
                <FormTextInput disabled={true} name="carPower" label="Power" placeholder="170hp" />
                <FormTextInput disabled={true} name="oilType" label="Oil type" placeholder="SAE 10W-40" />
            </div>
            <ButtonGroup onBackBtnClicked={props.onBackBtnClicked} />
        </AccountContainer>
    )
}
