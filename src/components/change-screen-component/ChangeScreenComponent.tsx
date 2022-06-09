import React, { useState } from "react"
import UserProfilePage from "../../screens/user-profile/UserProfilePage"
import { ForgottenPasswordPage } from "../../screens/forgotten-password/ForgottenPasswordPage"
import LoginScreen from "../../screens/login/LoginScreen"
import DetailedCarInfoPage from "../../screens/sign-up/CreateUser-DetailedCarInfo"
import CreateUserGeneralCarInfo from "../../screens/sign-up/CreateUser-GeneralCarInfo"
import MaintenanceScreen from "../../screens/user-profile/MaintanaceScreen"
import CreateUserDetailedCarInfo from "../../screens/sign-up/CreateUser-DetailedCarInfo"
import MaintanaceScreen from "../../screens/user-profile/MaintanaceScreen"
import { CreateUserCredentials } from "../../screens/sign-up/CreateUser-Credentials"
import { DetailedCarInfoScreen } from "../../screens/user-profile/DetailedCarInfoScreen"
import { LoginFormValues } from "../../screens/login/LoginForm"
import { SignupFormValues } from "../../screens/sign-up/forms/CredentialsForm"
import { GeneralCarInfoValues } from "../../screens/sign-up/forms/GeneralCarInfoForm"

export const ChangeScreenComponent = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const [carModel, setCarModel] = useState("")
    const [carBrand, setCarBrand] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const [registrationDate, setRegistrationDate] = useState("")

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

        // case 1:
        //     return (
        //         <UserProfilePage
        //             customerEmail={currentEmail}
        //             customerPassword={currentPass}
        //             newPurchased={newPurchase}
        //             currentPage={currentPage}
        //             carModel={carModel}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )

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
        case 9:
            return (
                <div>
                    <p>{carBrand}</p>
                    <p>{carModel}</p>
                    <p>{purchaseDate}</p>
                    <p>{registrationDate}</p>
                </div>
            )
        // case 4:
        //     return (
        //         <ForgottenPasswordPage
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //             confirmNewPassword={1}
        //             newPassword={1}
        //         />
        //     )
        // case 5:
        //     return (
        //         <DetailedCarInfoScreen currentPage={currentPage} onSetPage={(page: number) => setCurrentPage(page)} />
        //     )
        // case 6:
        //     return (
        //         <MaintenanceScreen
        //             kmOnPurchase={kmOnPurchase}
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
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
