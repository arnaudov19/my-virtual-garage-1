import { useState } from "react"
import { Button, DatePicker, Form, Input, InputNumber, Select, Switch, Steps } from "antd"
import { WelcomeScreen } from "../welcome-page/WelcomeScreen"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"

const { Step } = Steps
const { Option } = Select

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    newPurchasedCar: (newCar: string) => void
    carModel: (model: string) => void
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
    const nextPageHandler = () => {
        props.onSetPage(5)
        props.newPurchasedCar(isANewCar)
        props.carModel(carModel)
    }
    const backPageHandler = () => {
        props.onSetPage(3)
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="h-5/6 w-4/6 flex flex-col items-center justify-evenly pt-4 rounded-lg shadow-2xl">
                <ProgressSteps currentStep={1} />
                <div className="input-fields-signup-container">
                    <form className="w-4/6 flex flex-col items-center">
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
                <div style={{ width: "300px", display: "flex", justifyContent: "space-around" }}>
                    <button
                        onClick={backPageHandler}
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Back
                    </button>
                    <button
                        onClick={nextPageHandler}
                        className="group relative flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateUserGeneralCarInfo
