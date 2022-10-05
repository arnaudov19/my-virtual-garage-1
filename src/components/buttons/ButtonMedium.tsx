import React from "react"
import { Maybe } from "../../types"

type ButtonSize = "sm" | "md" | "lg"

type Props = {
    label: string
    onClick: () => void
    size: ButtonSize
    prefixIcon?: Maybe<React.ReactNode>
}

export const ButtonMedium = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className="group relative w-46 h-12 flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
            {props.prefixIcon ? (
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"> {props.prefixIcon} </span>
            ) : null}
            {props.label}
        </button>
    )
}

// React feature
ButtonMedium.defaultProps = {
    size: "md",
    onClick: () => null,
}
