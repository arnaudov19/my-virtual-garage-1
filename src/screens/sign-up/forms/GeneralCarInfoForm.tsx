import { Form } from "antd"
import React from "react"
import { ButtonMedium } from "../../../components/buttons/ButtonSmall"
import { FormDatePicker } from "../../../components/form-input-fields/FormDatePicker"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { FormSelectInput } from "../../../components/form-input-fields/FormSelectInput"

type Props = {
    onSumbit: (values: GeneralCarInfoValues) => void
    onSetPage: (page: number) => void
}
export type GeneralCarInfoValues = {
    brand: string
    model: string
    purchaseDate: string
    registrationDate: string
}
const carBrands = [
    { brand: "skoda", name: "Skoda", id: 1 },
    { brand: "audi", name: "Audi", id: 2 },
    { brand: "vw", name: "VW", id: 3 },
    { brand: "mercedes", name: "Mercedes", id: 4 },
]

export const GeneralCarInfoForm = (props: Props) => {
    const handleSubmit = (values: GeneralCarInfoValues) => {
        console.log("Success:", values)
        props.onSumbit(values)
    }
    const handleSubmitFailed = (errorInfo: any) => {
        console.log("Fail", errorInfo)
    }
    const onBackBtnClicked = () => {
        props.onSetPage(2)
    }

    return (
        <div className="w-4/6 flex flex-col items-center justify-between">
            <Form onFinish={handleSubmit} onFinishFailed={handleSubmitFailed} validateTrigger={"onBlur"}>
                <FormSelectInput
                    name="brand"
                    label="Enter Car Brand"
                    className="w-96"
                    size="large"
                    optionsList={carBrands}
                    rules={[
                        {
                            required: true,
                            message: "Please, enter your car brand",
                        },
                    ]}
                />
                <FormTextInput
                    label="Car Brand"
                    placeholder="Enter Your Car Brand"
                    className="w-96"
                    size="large"
                    name="model"
                    rules={[
                        {
                            required: true,
                            message: "Please, enter your car brand",
                        },
                    ]}
                />
                <FormDatePicker
                    name="registration-date"
                    placeholder="Select First Registration Date"
                    size="large"
                    className="w-96"
                    label="First Registration Date"
                />
                <FormDatePicker
                    placeholder="Select Purchase Date"
                    size="large"
                    className="w-96"
                    label="Purchase Date"
                />
                <div className="w-96 pt-6 flex justify-around">
                    <ButtonMedium onClick={onBackBtnClicked} label="Back" />
                    <ButtonMedium label="Next" />
                </div>
            </Form>
        </div>
    )
}
