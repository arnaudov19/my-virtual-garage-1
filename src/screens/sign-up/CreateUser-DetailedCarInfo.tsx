import React, { useState } from "react"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps, Checkbox } from "antd"
import { Option } from "antd/es/mentions"
import { WelcomeScreen } from "../welcome-page/WelcomeScreen"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { FormItemNumberInput } from "../../components/form-input-fields/FormItemNumberInput"
import { CreateUserContainer } from "./CreateUserContainer"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    onSetKmOnPurchase: (kiloOnPurch: number) => void
}

const CreateUserDetailedCarInfo = (props: Props) => {
    const [kmOnPurchase, setKmOnPurchase] = useState(0)
    const [price, setPrice] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [displacement, setDisplacement] = useState("")
    const [power, setPower] = useState("")
    const [oilType, setOilType] = useState("")

    // const getKmOnPurchase = (event: Event) => {
    //     setKmOnPurchase((event.target as HTMLInputElement).value)
    //     console.log(kmOnPurchase)
    // }
    const getPrice = (event: any) => {
        setPrice(event.target.value)
        console.log(price)
    }
    const getFuelType = (event: any) => {
        setFuelType(event.target.value)
        console.log(fuelType)
    }
    const getDisplacement = (event: any) => {
        setDisplacement(event.target.value)
        console.log(displacement)
    }
    const getPower = (event: any) => {
        setPower(event.target.value)
        console.log(power)
    }
    const getOilType = (event: any) => {
        setOilType(event.target.value)
        console.log(oilType)
    }

    const onNextBtnClicked = (event: any) => {
        event.preventDefault()
        props.onSetKmOnPurchase(kmOnPurchase)
        props.onSetPage(1)
    }
    const onBackBtnClicked = (event: any) => {
        event.preventDefault()
        props.onSetPage(4)
    }

    return (
        <CreateUserContainer>
            <ProgressSteps currentStep={2} />
            <div className="w-full flex justify-center gap-6">
                <Form className="w-4/6 flex flex-col items-center">
                    <div className="flex h-5/6 gap-6 pb-12">
                        <div>
                            <FormItemNumberInput
                                onChange={(value: number) => setKmOnPurchase(value)}
                                value={kmOnPurchase}
                                size="large"
                                label="Kilometres on Purchase"
                                placeholder="59000km"
                            />

                            <FormItemNumberInput size="large" label="Price" placeholder="4000$" />
                            <FormTextInput
                                onChange={() => getFuelType}
                                size="large"
                                label="Fuel Type"
                                placeholder="Diesel, Gasoline.."
                            />
                        </div>
                        <div>
                            <FormItemNumberInput size="large" label="Displacement" placeholder="1998cc" />
                            <FormItemNumberInput size="large" label="Power" placeholder="170hp" />
                            <FormTextInput
                                onChange={() => getOilType}
                                size="large"
                                label="Oil type"
                                placeholder="SAE 10W-40"
                            />
                        </div>
                    </div>
                </Form>
            </div>
            <div className="w-96 flex justify-around">
                <ButtonSimple onClick={() => onBackBtnClicked(event as MouseEvent)} label="Back" />
                <ButtonSimple onClick={() => onNextBtnClicked(event as MouseEvent)} label="Next" />
            </div>
        </CreateUserContainer>
    )
}

export default CreateUserDetailedCarInfo
