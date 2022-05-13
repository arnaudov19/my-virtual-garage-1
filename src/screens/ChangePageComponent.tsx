import React, { useState } from "react"
import { WelcomePage } from "./WelcomePage"
import UserCredentialsPage from "./UserCredentialsPage"
import UserProfilePage from "./UserProfilePage"
import { ForgottenPasswordPage } from "./ForgottenPasswordPage"
import LoginPage from "./LoginPage"
import DetailedCarInfoPage from "./DetailedCarInfoPage"
import GeneralCarInfoPage from "./GeneralCarInfoPage"

export const ChangePageComponent = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")
    const [newPurchase, setNewPurchase] = useState("")
    const [carModel, setCarModel] = useState("")

    switch (currentPage) {
        case 0:
            return <WelcomePage onSetPage={(page: number) => setCurrentPage(page)} />
        case 1:
            return (
                <LoginPage
                    customerEmail={currentEmail}
                    customerPassword={currentPass}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        case 2:
            return (
                <UserProfilePage
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
                <UserCredentialsPage
                    userEmail={(email: string) => setCurrentEmail(email)}
                    password={(password: string) => setCurrentPass(password)}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )

        case 4:
            return (
                <GeneralCarInfoPage
                    newPurchasedCar={(newCar: string) => setNewPurchase(newCar)}
                    currentPageLogin={currentPage}
                    carModel={(model: string) => setCarModel(model)}
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
                <ForgottenPasswordPage
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                    confirmNewPassword={1}
                    newPassword={1}
                />
            )
        default:
            return <WelcomePage onSetPage={(page: number) => setCurrentPage(page)} />
    }
}
