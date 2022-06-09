import React, { useState } from "react"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps } from "antd"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { CreateUserContainer } from "./CreateUserContainer"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"
import { BrandFormSelectInput } from "./forms/BrandFormSelectInput"
import { FormDatePicker } from "../../components/form-input-fields/FormDatePicker"
import { GeneralCarInfoForm, GeneralCarInfoValues } from "./forms/GeneralCarInfoForm"

const { Step } = Steps
const { Option } = Select

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    onCollectGeneralCarInfoValues: (values: any) => void
    brand: string
    model: string
    purchaseDate: string
    registrationDate: string
}

const CreateUserGeneralCarInfo = (props: Props) => {
    const onNextBtnClicked = () => {
        props.onSetPage(9)
        console.log("btn clicked")
    }
    const onBackBtnClicked = (page: number) => {
        props.onSetPage(page)
    }
    const collectGeneralCarInfoData = (values: GeneralCarInfoValues) => {
        props.onCollectGeneralCarInfoValues(values)
        onNextBtnClicked()
    }
    return (
        <CreateUserContainer>
            <ProgressSteps currentStep={1} />
            <div className="w-full flex justify-center gap-6">
                <GeneralCarInfoForm
                    onSetPage={(page: number) => onBackBtnClicked(page)}
                    onSumbit={collectGeneralCarInfoData}
                />
            </div>
        </CreateUserContainer>
    )
}

export default CreateUserGeneralCarInfo
