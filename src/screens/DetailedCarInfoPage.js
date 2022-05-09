import React, { useState } from "react"
/*import "../styles/style.css"*/
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps, Checkbox } from "antd"
import { Option } from "antd/es/mentions"
import { WelcomePage } from "./WelcomePage"
import { ProgressSteps } from "../components/ProgressSteps"
import { CustomInputField } from "../components/CustomInputField"
import CustomNumberInputField from "../components/CustomNumberInputField"

const { Step } = Steps

type Props = {
    onSetPage: (page: number) => void,
}

const GeneralCarInfoPage = (props: Props) => {
    const [kmOnPurchase, setKmOnPurchase] = useState("")
    const [price, setPrice] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [displacement, setDisplacement] = useState("")
    const [power, setPower] = useState("")
    const [oilType, setOilType] = useState("")

    const getKmOnPurchase = (e) => {
        setKmOnPurchase(e.target.value)
        console.log(kmOnPurchase)
    }
    const getPrice = (e) => {
        setPrice(e.target.value)
        console.log(price)
    }
    const getFuelType = (e) => {
        setFuelType(e.target.value)
        console.log(fuelType)
    }
    const getDisplacement = (e) => {
        setDisplacement(e.target.value)
        console.log(displacement)
    }
    const getPower = (e) => {
        setPower(e.target.value)
        console.log(power)
    }
    const getOilType = (e) => {
        setOilType(e.target.value)
        console.log(oilType)
    }

    const nextPageHandler = (event) => {
        event.preventDefault()
        props.onSetPage(1)
    }
    const backPageHandler = (event) => {
        event.preventDefault()
        props.onSetPage(0)
    }

    return (
        <div className="signup-form-container">
            <ProgressSteps currentStep={2} />
            <div className="input-fields-signup-container">
                <Form style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <CustomNumberInputField
                        onChange={getKmOnPurchase}
                        value={kmOnPurchase}
                        size="large"
                        label="Kilometres on Purchase"
                        placeholder="59000km"
                    />
                    <CustomNumberInputField size="large" label="Price" placeholder="4000$" />
                    <CustomInputField
                        onChange={getFuelType}
                        size="large"
                        label="Fuel Type"
                        placeholder="Diesel, Gasoline.."
                    />
                    <CustomNumberInputField size="large" label="Displacement" placeholder="1998cc" />
                    <CustomNumberInputField size="large" label="Power" placeholder="170hp" />
                    <CustomInputField onChange={getOilType} size="large" label="Oil type" placeholder="SAE 10W-40" />

                    <div style={{ width: "300px", display: "flex", justifyContent: "space-around" }}>
                        <button
                            onClick={backPageHandler}
                            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                            Back
                        </button>
                        <button
                            onClick={nextPageHandler}
                            className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                            Create Account
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default GeneralCarInfoPage
