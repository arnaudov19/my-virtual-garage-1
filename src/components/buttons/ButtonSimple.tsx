import React, { MouseEventHandler } from "react"

type Props = {
    label: string
    onClick: () => void
}

export const ButtonSimple = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className=" bg-sky-600 hover:bg-sky-700 text-white py-3 px-7 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            {props.label}
        </button>
    )
}
