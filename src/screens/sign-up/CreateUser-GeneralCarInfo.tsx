import React, { useState } from "react"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps } from "antd"
import { WelcomeScreen } from "../welcome-page/WelcomeScreen"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { CreateUserContainer } from "./CreateUserContainer"
import { ButtonSimple } from "../../components/buttons/ButtonSimple"

const { Step } = Steps
const { Option } = Select

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    /* newPurchasedCar: (newCar: string) => void
    carModel: (model: string) => void*/
    registrationDate: (regDate: string) => void
}

const CreateUserGeneralCarInfo = (props: Props) => {
    const [carBrand, setCarBrand] = useState("")
    const [carModel, setCarModel] = useState("")
    const [isANewCar, setIsANewCar] = useState("")
    const [registrationDate, setRegistrationDate] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")

    const getCarBrand = (event: any) => {
        setCarBrand(event.target.value)
        console.log(carBrand)
    }
    const getCarModel = (event: any) => {
        setCarModel(event.target.value)
    }
    const getIsANewCar = (event: any) => {
        setIsANewCar(event.target.value)
    }
    const getRegistrationDate = (event: any) => {
        setRegistrationDate(event.target.value)
        console.log(registrationDate)
    }
    const onNextBtnClicked = () => {
        props.onSetPage(5)
    }
    const onBackBtnClicked = () => {
        props.onSetPage(3)
    }
    return (
        <CreateUserContainer>
            <ProgressSteps currentStep={1} />
            <div className="w-full flex justify-center gap-6">
                <form className="w-4/6 flex flex-col items-center">
                    <Form.Item className="w-80">
                        <label>Brand</label>
                        {/* // TODO check ant example */}
                        <Select size="large" placeholder="Select Your Car Brand">
                            <Option value="audi">Audi</Option>
                            <Option value="bmw">BMW</Option>
                            <Option value="vw">VW</Option>
                            <Option value="mercedes">Mercedes</Option>
                            <Option value="skoda">Skoda</Option>
                        </Select>
                    </Form.Item>
                    <FormTextInput
                        value={carModel}
                        onChange={() => getCarModel}
                        name="model"
                        label="Model"
                        size="large"
                        placeholder="Enter Your Car Model"
                    />
                    <p>{carModel}</p>
                    <Form.Item>
                        <div className="input-container">
                            <label>Newly purchased?</label>
                            <select onChange={getIsANewCar}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="input-container">
                            <label>Registration Date</label>
                            <DatePicker onChange={getRegistrationDate} />
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <div className="input-container">
                            <label>Purchase Date</label>
                            <DatePicker />
                        </div>
                    </Form.Item>
                </form>
            </div>
            <div className="w-96 flex justify-around">
                <ButtonSimple onClick={() => onBackBtnClicked()} label="Back" />
                <ButtonSimple onClick={() => onNextBtnClicked()} label="Next" />
            </div>
        </CreateUserContainer>
    )
}

export default CreateUserGeneralCarInfo
