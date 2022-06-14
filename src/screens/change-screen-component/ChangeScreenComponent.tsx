import React, { useState } from "react"
import { UserProfileScreen } from "../user-profile/UserProfileScreen"
import LoginScreen from "../login/LoginScreen"
import CreateUserGeneralCarInfo from "../sign-up/CreateUser-GeneralCarInfo"
import CreateUserDetailedCarInfo from "../sign-up/CreateUser-DetailedCarInfo"
import { CreateUserCredentials } from "../sign-up/CreateUser-Credentials"
import { LoginFormValues } from "../login/LoginForm"
import { SignupFormValues } from "../sign-up/forms/CredentialsForm"
import { GeneralCarInfoValues } from "../sign-up/forms/GeneralCarInfoForm"

import { Steps } from "antd"
import { DetailedCarInfoValues } from "../sign-up/forms/DetailedCarInfoForm"
import { UserProfileForm } from "../user-profile/UserProfileForm"
export const ChangeScreenComponent = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [carModel, setCarModel] = useState("")
    const [carBrand, setCarBrand] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const [registrationDate, setRegistrationDate] = useState("")
    const [kmOnPurchase, setkmOnPurchase] = useState("")
    const [price, setPrice] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [displacement, setDisplacement] = useState("")
    const [power, setPower] = useState("")
    const [oilType, setOilType] = useState("")

    const collectLoginData = (values: LoginFormValues) => {
        setCurrentEmail(values.email)
        setCurrentPass(values.password)
    }
    const collectSignUpData = (values: SignupFormValues) => {
        setCurrentEmail(values.email)
        setCurrentPass(values.password)
        setConfirmPass(values.confirmPassword)
    }
    const collectGeneralCarInfoData = (values: GeneralCarInfoValues) => {
        setCarModel(values.model)
        setCarBrand(values.brand)
        setPurchaseDate(values.purchaseDate)
        setRegistrationDate(values.registrationDate)
    }
    const collectDetailedCarInfoData = (values: DetailedCarInfoValues) => {
        setkmOnPurchase(values.kmOnPurchase)
        setPrice(values.price)
        setFuelType(values.fuelType)
        setDisplacement(values.displacement)
        setPower(values.carPower)
        setOilType(values.oilType)
    }

    switch (currentPage) {
        case 0:
            return (
                <LoginScreen
                    customerEmail={currentEmail}
                    customerPassword={currentPass}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                    onCollectLoginData={collectLoginData}
                />
            )

        case 1:
            return (
                <UserProfileScreen
                    email={currentEmail}
                    password={currentPass}
                    confirmPassword={confirmPass}
                    carBrand={carBrand}
                    carModel={carModel}
                    kmOnPurchase={kmOnPurchase}
                    price={price}
                    fuelType={fuelType}
                    displacement={displacement}
                    power={power}
                    oilType={oilType}
                    onSetPage={(page: number) => setCurrentPage(page)}
                    currentPage={currentPage}>
                    <UserProfileForm
                        onSetPage={(page: number) => setCurrentPage(page)}
                        currentPage={currentPage}
                        value={currentEmail}
                    />
                </UserProfileScreen>
            )

        case 2:
            return (
                <CreateUserCredentials
                    email={currentEmail}
                    password={currentPass}
                    confirmPassword={confirmPass}
                    currentPage={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                    onCollectSignupData={collectSignUpData}
                />
            )
        case 3:
            return (
                <CreateUserGeneralCarInfo
                    brand={carBrand}
                    model={carModel}
                    purchaseDate={purchaseDate}
                    registrationDate={registrationDate}
                    onCollectGeneralCarInfoValues={collectGeneralCarInfoData}
                    currentPage={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 4:
            return (
                <CreateUserDetailedCarInfo
                    kilometresOnPurchase={kmOnPurchase}
                    price={price}
                    fuel={fuelType}
                    displacement={displacement}
                    power={power}
                    oilType={oilType}
                    onCollectDetailedCarInfoValues={collectDetailedCarInfoData}
                    currentPage={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )

        case 5:
            return (
                <div>
                    <div>
                        <p>{carBrand}</p>
                        <p>{carModel}</p>
                        <p>{purchaseDate}</p>
                        <p>{registrationDate}</p>
                    </div>
                    <div>
                        <p>{currentEmail}</p>
                        <p>{currentPass}</p>
                        <p>{confirmPass}</p>
                    </div>
                    <div>
                        <p>{kmOnPurchase}</p>
                        <p>{price}</p>
                        <p>{fuelType}</p>
                        <p>{displacement}</p>
                        <p>{power}</p>
                        <p>{oilType}</p>
                    </div>
                </div>
            )
        default:
            return (
                <LoginScreen
                    customerEmail={currentEmail}
                    customerPassword={currentPass}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                    onCollectLoginData={collectLoginData}
                />
            )
    }
}
