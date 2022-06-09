import { Form } from "antd"
import React from "react"
import { Button } from "../../../components/buttons/Button"
import { ButtonSimple } from "../../../components/buttons/ButtonSimple"
import { ButtonSmall } from "../../../components/buttons/ButtonSmall"
import { FormDatePicker } from "../../../components/form-input-fields/FormDatePicker"
import { FormItemPasswordInput } from "../../../components/form-input-fields/FormItemPasswordInput"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { BrandFormSelectInput } from "./BrandFormSelectInput"

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
            <Form
                onFinish={handleSubmit}
                onFinishFailed={handleSubmitFailed}
                validateTrigger={"onBlur"}
                className="w-4/6 flex flex-col items-center">
                <BrandFormSelectInput label="Enter Car Brand" className="w-96" size="large" />
                <FormTextInput
                    name="model"
                    label="Enter Car Model"
                    placeholder="Enter Car Model"
                    size="large"
                    className="w-96"
                    rules={[
                        {
                            required: true,
                            type: "text",
                            message: "Please, fill the input",
                        },
                    ]}
                />
                <FormDatePicker
                    placeholder="Select First Registration Date"
                    size="large"
                    className="w-96 mb-3"
                    label="First Registration Date"
                />
                <FormDatePicker
                    placeholder="Select Purchase Date"
                    size="large"
                    className="w-96"
                    label="Purchase Date"
                />
                <div className="w-96 flex justify-around">
                    <ButtonSmall onClick={onBackBtnClicked} label="Back" />
                    <ButtonSmall label="Next" />
                </div>
            </Form>
        </div>
    )
}
