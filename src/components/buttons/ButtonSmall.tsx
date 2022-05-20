import React from "react"

type Props = {
    label: string
    onClick: () => void
}

export const ButtonSmall = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className="bg-primary hover:bg-primary-700 text-white font-bold py-2 px-2 rounded">
            {props.label}
        </button>
    )
}
