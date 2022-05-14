import React, { useState } from "react"
import { WelcomeScreen } from "./WelcomeScreen"
import CreateUserCredentials from "./CreateUser-Credentials"
import UserProfileScreen from "./UserProfileScreen"
import { ForgottenPasswordScreen } from "./ForgottenPasswordScreen"
import LoginPageScreen from "./LoginPageScreen"
import DetailedCarInfoPage from "./CreateUser-GeneralCarInfo"
import CreateUserDetailedCarInfo from "./CreateUser-DetailedCarInfo"

export const ChangeScreenComponent = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")
    const [newPurchase, setNewPurchase] = useState("")
    const [carModel, setCarModel] = useState("")

    switch (currentPage) {
        case 0:
            return <WelcomeScreen onSetPage={(page: number) => setCurrentPage(page)} />
        case 1:
            return (
                <LoginPageScreen
                    customerEmail={currentEmail}
                    customerPassword={currentPass}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 2:
            return (
                <UserProfileScreen
                    customerEmail={currentEmail}
                    customerPassword={currentPass}
                    newPurchased={newPurchase}
                    currentPageLogin={currentPage}
                    carModel={carModel}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 3:
            return (
                <CreateUserCredentials
                    userEmail={(email: string) => setCurrentEmail(email)}
                    password={(password: string) => setCurrentPass(password)}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 4:
            return (
                <CreateUserDetailedCarInfo
                    newPurchasedCar={(newCar: string) => setNewPurchase(newCar)}
                    currentPageLogin={currentPage}
                    carModel={(model: string) => setCarModel(model)}
                    registrationDate={(regDate: string) => regDate}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 5:
            return (
                <DetailedCarInfoPage
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 6:
            return (
                <ForgottenPasswordScreen
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                    confirmNewPassword={1}
                    newPassword={1}
                />
            )
        default:
            return <WelcomeScreen onSetPage={(page: number) => setCurrentPage(page)} />
    }
}
