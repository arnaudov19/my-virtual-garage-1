import React from "react"
import { ButtonGroup } from "../../../components/buttons/ButtonGroup"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { AccountContainer } from "../AccountFormContainer/AccountFormContainer"
import { Form } from "antd"

type Props = {
    onBackBtnClicked?: () => void
    kmOnPurchase?: string
    price?: string
    fuelType?: string
    displacement?: string
    carPower?: string
    oilType?: string
}

export const AccountDetailedCarInfo = (props: Props) => {
    return (
        <AccountContainer>
            <h1 className="text-2xl pb-6">General Car Data</h1>
            <Form>
                <div>
                    <FormTextInput
                        disabled={false}
                        name="kmOnPurchase"
                        label="Kilometres on Purchase"
                        placeholder="59000"
                        initialValue={props.kmOnPurchase}
                    />
                    <FormTextInput
                        disabled={false}
                        name="price"
                        label="Price"
                        placeholder="4000$"
                        initialValue={props.price}
                    />
                    <FormTextInput
                        disabled={false}
                        name="fuelType"
                        label="Fuel Type"
                        placeholder="Diesel, Gasoline.."
                        initialValue={props.fuelType}
                    />
                </div>
                <div>
                    <FormTextInput
                        disabled={false}
                        name="displacement"
                        label="Displacement"
                        placeholder="1998cc"
                        initialValue={props.displacement}
                    />
                    <FormTextInput
                        disabled={false}
                        name="carPower"
                        label="Power"
                        placeholder="170hp"
                        initialValue={props.carPower}
                    />
                    <FormTextInput
                        disabled={false}
                        name="oilType"
                        label="Oil type"
                        placeholder="SAE 10W-40"
                        initialValue={props.oilType}
                    />
                </div>
            </Form>

            <ButtonGroup onBackBtnClicked={props.onBackBtnClicked} />
        </AccountContainer>
    )
}
