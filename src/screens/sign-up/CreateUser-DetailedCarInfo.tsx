import React, { useState } from "react"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps, Checkbox } from "antd"
import { Option } from "antd/es/mentions"
import { WelcomePage } from "../WelcomePage"
import { ProgressSteps } from "../../components/ProgressSteps"
import { FormItemInput } from "../../components/form-input-fields/FormTextInput"
import { FormItemNumberInput } from "../../components/form-input-fields/FormItemNumberInput"

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

    const getKmOnPurchase = (event: Event) => {
        // setKmOnPurchase((event.target as HTMLInputElement).value)
        console.log(kmOnPurchase)
    }
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

    const nextPageHandler = (event: any) => {
        event.preventDefault()
        props.onSetKmOnPurchase(kmOnPurchase)
        props.onSetPage(1)
    }
    const backPageHandler = (event: any) => {
        event.preventDefault()
        props.onSetPage(4)
    }

    return (
        <div className="signup-form-container flex flex-col items-center justify-center">
            <div className="h-5/6 w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-lg shadow-2xl">
                <ProgressSteps currentStep={2} />
                <div className="input-fields-signup-container">
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
                                <FormItemInput
                                    onChange={getFuelType}
                                    size="large"
                                    label="Fuel Type"
                                    placeholder="Diesel, Gasoline.."
                                />
                            </div>
                            <div>
                                <FormItemNumberInput size="large" label="Displacement" placeholder="1998cc" />
                                <FormItemNumberInput size="large" label="Power" placeholder="170hp" />
                                <FormItemInput
                                    onChange={getOilType}
                                    size="large"
                                    label="Oil type"
                                    placeholder="SAE 10W-40"
                                />
                            </div>
                        </div>
                    </Form>
                </div>
                <div style={{ width: "300px", display: "flex", justifyContent: "space-around" }}>
                    <button
                        onClick={backPageHandler}
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Back
                    </button>
                    <button
                        onClick={nextPageHandler}
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateUserDetailedCarInfo
