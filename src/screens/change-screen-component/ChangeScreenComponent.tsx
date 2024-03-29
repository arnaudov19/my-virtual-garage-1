import React, { useState } from "react"
import LoginScreen from "../login/LoginScreen"
import { LoginFormValues } from "../login/LoginForm"
import { SignupFormValues } from "../sign-up/forms/CredentialsForm"
import { GeneralCarInfoValues } from "../sign-up/forms/GeneralCarInfoForm"
import { DetailedCarInfoValues } from "../sign-up/forms/DetailedCarInfoForm"
import { LogOutModal } from "../../components/modals/LogOutModal"

export const ChangeScreenComponent = () => {
    const [currentPage, setCurrentPage] = useState(1)
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
        console.log(values.password)
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
                <LoginScreen onSetPage={(page: number) => setCurrentPage(page)} onCollectLoginData={collectLoginData} />
            )

        case 1:
        // return (
        //     <AccountScreen
        //         email={currentEmail}
        //         password={currentPass}
        //         confirmPassword={confirmPass}
        //         carBrand={carBrand}
        //         carModel={carModel}
        //         kmOnPurchase={kmOnPurchase}
        //         price={price}
        //         fuelType={fuelType}
        //         displacement={displacement}
        //         power={power}
        //         oilType={oilType}
        //         onSetPage={(page: number) => setCurrentPage(page)}
        //         currentPage={currentPage}
        //     />
        // )

        // case 2:
        //     return (
        //         <SignupCredentials
        //             email={currentEmail}
        //             password={currentPass}
        //             confirmPassword={confirmPass}
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //             onCollectSignupData={collectSignUpData}
        //         />
        //     )
        // case 3:
        //     return (
        //         <CreateUserGeneralCarInfo
        //             purchaseDate={purchaseDate}
        //             registrationDate={registrationDate}
        //             onCollectGeneralCarInfoValues={collectGeneralCarInfoData}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //             currentPage={currentPage}
        //         />
        //     )
        // case 4:
        //     return (
        //         <CreateUserDetailedCarInfo
        //             price={price}
        //             fuel={fuelType}
        //             displacement={displacement}
        //             power={power}
        //             oilType={oilType}
        //             onCollectDetailedCarInfoValues={collectDetailedCarInfoData}
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        case 5:
            return <LogOutModal currentPage={currentPage} onSetPage={(page: number) => setCurrentPage(page)} />
        default:
            return (
                <LoginScreen onSetPage={(page: number) => setCurrentPage(page)} onCollectLoginData={collectLoginData} />
            )
    }
}
