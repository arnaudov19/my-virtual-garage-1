import React from "react"
import { Button } from "../components/Button"

type Props = {
    onSetPage: (page: number) => void
}

export const WelcomePage = (props: Props) => {
    const onLoginBtnClicked = () => {
        props.onSetPage(1)
    }

    const onCreateNewBtnClicked = () => {
        props.onSetPage(3)
    }

    return (
        <div className="flex justify-center items-center flex-col gap-4 h-screen">
            <h1 className="text-5xl text-black-400 pb-12 ">Welcome to My Virtual Garage</h1>
            <div style={styles.buttonContainer}>
                <Button label="Create New" onClick={onCreateNewBtnClicked} />
                <Button label="Log in" onClick={onLoginBtnClicked} />
            </div>
        </div>
    )
}

const styles = {
    buttonContainer: {
        width: "438px",
        display: "flex",
        justifyContent: "space-around",
    },
}
