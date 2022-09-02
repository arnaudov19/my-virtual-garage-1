import { Form } from "antd"
import React from "react"
import { ButtonMedium } from "../../../components/buttons/ButtonSmall"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"

type Props = {
    onSumbit: (values: DetailedCarInfoValues) => void
    onSetPage: (page: number) => void
}
export type DetailedCarInfoValues = {
    kmOnPurchase: string
    price: string
    fuelType: string
    displacement: string
    carPower: string
    oilType: string
}

export const DetailedCarInfoForm = (props: Props) => {
    const handleSubmit = (values: DetailedCarInfoValues) => {
        console.log("Success:", values)
        props.onSumbit(values)
    }
    const handleSubmitFailed = (errorInfo: any) => {
        console.log("Fail", errorInfo)
    }
    const onBackBtnClicked = () => {
        props.onSetPage(3)
    }
    return (
        <Form
            onFinish={handleSubmit}
            onFinishFailed={handleSubmitFailed}
            validateTrigger={"onBlur"}
            className="w-4/6 flex flex-col items-center">
            <div className="flex flex-col md:flex-row h-fit md:h-5/6 md:gap-6 pb-12">
                <div>
                    <FormTextInput
                        name="kmOnPurchase"
                        size="large"
                        label="Kilometres on Purchase"
                        placeholder="59000"
                    />
                    <FormTextInput name="price" size="large" label="Price" placeholder="4000$" />
                    <FormTextInput name="fuelType" size="large" label="Fuel Type" placeholder="Diesel, Gasoline.." />
                </div>
                <div>
                    <FormTextInput name="displacement" size="large" label="Displacement" placeholder="1998cc" />
                    <FormTextInput name="carPower" size="large" label="Power" placeholder="170hp" />
                    <FormTextInput name="oilType" size="large" label="Oil type" placeholder="SAE 10W-40" />
                </div>
            </div>
            <div className="w-96 pt-6 flex justify-around">
                <ButtonMedium onClick={onBackBtnClicked} label="Back" />
                <ButtonMedium label="Create Account" />
            </div>
        </Form>
    )
}
