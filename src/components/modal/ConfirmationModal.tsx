import React from "react"
import { Button } from "../buttons/Button"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
}

export const ConfirmationModal = (props: any) => {
    const onConfirmBtnClicked = () => {
        props.onSetPage(0)
    }
    return (
        <>
            <div>
                <Button label="Confirm" onClick={onConfirmBtnClicked} />
            </div>
        </>
    )
}
