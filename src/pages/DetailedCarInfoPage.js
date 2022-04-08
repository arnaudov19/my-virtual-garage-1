import React, { useState } from "react"
import "../styles/style.css"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps, Checkbox } from "antd"
import { Option } from "antd/es/mentions"
import { WelcomePage } from "./WelcomePage"
import { ProgressSteps } from "../reusable-components/ProgressSteps"
import { CustomInputField } from "../reusable-components/CustomInputField"
import CustomNumberInputField from "../reusable-components/CustomNumberInputField"

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

    const submitHandler = (event) => {
        event.preventDefault()
        props.onSetPage(1)
    }
    return (
        <div className="signup-form-container">
            <ProgressSteps currentStep={2} />
            <div className="input-fields-signup-container">
                <form
                    onSubmit={submitHandler}
                    style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}>
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

                    <Form.Item style={{ display: "flex", alignItems: "center" }}>
                        <Button htmlType="submit" size="large" type="primary">
                            Create Account
                        </Button>
                    </Form.Item>
                </form>
            </div>
        </div>
    )
}

export default GeneralCarInfoPage
