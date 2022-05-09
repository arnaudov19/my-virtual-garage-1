import React, { useState } from "react"
import { WelcomePage } from "./WelcomePage"

export const ChangePageComponent = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [currentEmail, setCurrentEmail] = useState("")
    const [currentPass, setCurrentPass] = useState("")

    switch (currentPage) {
        case 0:
            return <WelcomePage onSetPage={(page: number) => setCurrentPage(page)} />
        // case 1:
        //     return (
        //         <LoginPage
        //             customerEmail={currentEmail}
        //             customerPassword={currentPass}
        //             currentPageLogin={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        // case 2:
        //     return <UserProfilePage currentPageLogin={currentPage} onSetPage={(page: number) => setCurrentPage(page)} />
        // case 3:
        //     return (
        //         <UserCredentialsPage
        //             userEmail={(email: string) => setCurrentEmail(email)}
        //             password={(password: string) => setCurrentPass(password)}
        //             currentPageLogin={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        // case 4:
        //     return (
        //         <GeneralCarInfoPage currentPageLogin={currentPage} onSetPage={(page: number) => setCurrentPage(page)} />
        //     )
        // case 5:
        //     return (
        //         <DetailedCarInfoPage
        //             currentPageLogin={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        // case 6:
        //     return (
        //         <ForgottenPasswordPage
        //             currentPageLogin={currentPage}
        //             onSetPage={(page: number) => setCurrentPage(page)}
        //         />
        //     )
        default:
            return <WelcomePage onSetPage={(page: number) => setCurrentPage(page)} />
    }
}
