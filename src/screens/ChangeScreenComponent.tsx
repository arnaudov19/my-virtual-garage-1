import React, { useState } from "react"
import { WelcomeScreen } from "./welcome-page/WelcomeScreen"
import UserProfilePage from "./user-profile/UserProfilePage"
import { ForgottenPasswordPage } from "./ForgottenPasswordPage"
import LoginScreen from "./login/LoginScreen"
import DetailedCarInfoPage from "./sign-up/CreateUser-DetailedCarInfo"
import CreateUserGeneralCarInfo from "./sign-up/CreateUser-GeneralCarInfo"
import MaintenanceScreen from "./user-profile/MaintanaceScreen"

import CreateUserDetailedCarInfo from "./sign-up/CreateUser-DetailedCarInfo"
import MaintanaceScreen from "./user-profile/MaintanaceScreen"
import CreateUserCredentials from "./sign-up/CreateUser-Credentials"
import { DetailedCarInfoScreen } from "./user-profile/DetailedCarInfoScreen"

export const ChangeScreenComponent = () => {
    const [currentPage, setCurrentPage] = useState(1)

    // TODO this should live in some other component/place
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")

    switch (currentPage) {
        case 0:
            return <WelcomeScreen onSetPage={(page: number) => setCurrentPage(page)} />
        case 1:
            return (
                <LoginScreen
                    customerEmail={currentEmail}
                    customerPassword={currentPass}
                    currentPageLogin={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )

            const [newPurchase, setNewPurchase] = useState("")
            const [carModel, setCarModel] = useState("")
            const [kmOnPurchase, setKmOnPurchase] = useState(0)

        // case 2:
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

        case 3:
            return (
                <CreateUserCredentials
                    userEmail={(email: string) => setCurrentEmail(email)}
                    password={(password: string) => setCurrentPass(password)}
                    currentPage={currentPage}
                    onSetPage={(page: number) => setCurrentPage(page)}
                />
            )
        // case 4:
        //     return (
        //         <CreateUserGeneralCarInfo
        //             newPurchasedCar={(newCar: string) => setNewPurchase(newCar)}
        //             currentPage={currentPage}
        //             carModel={(model: string) => setCarModel(model)}
        //             registrationDate={(regDate: string) => regDate}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        // case 5:
        //     return (
        //         <CreateUserDetailedCarInfo
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //             onSetKmOnPurchase={(kiloOnPurch: number) => setKmOnPurchase(kiloOnPurch)}
        //         />
        //     )
        // case 6:
        //     return (
        //         <ForgottenPasswordPage
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //             confirmNewPassword={1}
        //             newPassword={1}
        //         />
        //     )
        // case 7:
        //     return (
        //         <DetailedCarInfoScreen currentPage={currentPage} onSetPage={(page: number) => setCurrentPage(page)} />
        //     )
        // case 8:
        //     return (
        //         <MaintenanceScreen
        //             kmOnPurchase={kmOnPurchase}
        //             currentPage={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        default:
            return <WelcomeScreen onSetPage={(page: number) => setCurrentPage(page)} />
    }
}
