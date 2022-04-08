import { useState } from "react"
import "../styles/style.css"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps, Checkbox } from "antd"
import { WelcomePage } from "./WelcomePage"
import { ProgressSteps } from "../reusable-components/ProgressSteps"
import { CustomInputField } from "../reusable-components/CustomInputField"
import { setCurrentPage } from "../storage/mainStorage"

const { Step } = Steps
const { Option } = Select

type Props = {
    onSetPage: (page: number) => void,
}

const GeneralCarInfoPage = (props: Props) => {
    const [carBrand, setCarBrand] = useState("")
    const [carModel, setCarModel] = useState("")
    const [isANewCar, setIsANewCar] = useState(true)
    const [registrationDate, setRegistrationDate] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")

    const getCarBrand = (event) => {
        setCarBrand(event.target.value)
        console.log(carBrand)
    }
    const getCarModel = (event) => {
        setCarModel(event.target.value)
        console.log(carModel)
    }
    const isNewCar = (event) => {
        setIsANewCar(event.target.value)
        console.log(setIsANewCar)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.onSetPage(5)
    }
    return (
        <div className="signup-form-container">
            <ProgressSteps currentStep={1} />
            <div className="input-fields-signup-container">
                <form
                    onSubmit={submitHandler}
                    layout="horizontal"
                    style={{
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <Form.Item style={{ width: "300px" }}>
                        <label>Brand</label>
                        <Select size="large" placeholder="Select Your Car Brand">
                            <Option value="audi">Audi</Option>
                            <Option value="bmw">BMW</Option>
                            <Option value="vw">VW</Option>
                            <Option value="mercedes">Mercedes</Option>
                            <Option value="skoda">Skoda</Option>
                        </Select>
                    </Form.Item>
                    <CustomInputField
                        value={carModel}
                        onChange={getCarModel}
                        name="model"
                        label="Model"
                        size="large"
                        placeholder="Enter Your Car Model"
                    />
                    <p>{carModel}</p>
                    <Form.Item>
                        <div className="input-container">
                            <label>Newly purchased?</label>
                            <Switch></Switch>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="input-container">
                            <label>Registration Date</label>
                            <DatePicker />
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <div className="input-container">
                            <label>Purchase Date</label>
                            <DatePicker />
                        </div>
                    </Form.Item>
                    <Form.Item style={{ display: "flex", alignItems: "center" }}>
                        <Button size="large" htmlType="submit" type="primary">
                            Next
                        </Button>
                    </Form.Item>
                </form>
            </div>
        </div>
    )
}

export default GeneralCarInfoPage
