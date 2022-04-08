import React from "react"
import { Button } from "antd"

type Props = {
    onSetPage: (page: number) => void,
}

export const WelcomePage = (props: Props) => {
    const goToLoginPage = () => {
        props.onSetPage(1)
    }
    const goToCreateAccPage = () => {
        props.onSetPage(3)
    }
    return (
        <div className="title-container">
            <div>
                <h1>Welcome to My Virtual Garage</h1>
            </div>
            <div className="button-container">
                <Button onClick={goToCreateAccPage} type="primary" size="large">
                    Create new
                </Button>
                <Button onClick={goToLoginPage} size="large">
                    Log in
                </Button>
            </div>
        </div>
    )
}
