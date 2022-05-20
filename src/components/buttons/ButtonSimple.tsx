import React from "react"

type Props = {
    label: string
    disabled: boolean
    type: "primary" | "danger"
    onClick: () => void
}

export const ButtonSimple = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className=" bg-primary hover:bg-primary-700 text-white font-bold py-4 px-6 rounded">
            {props.label}
        </button>
    )
}
