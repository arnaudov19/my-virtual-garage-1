import React from "react"
import { Maybe } from "../types"

type ButtonSize = "sm" | "md" | "lg"

type Props = {
    label: string
    onClick: () => void
    size: ButtonSize
    prefixIcon?: Maybe<React.ReactNode>
}

export const Button = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className=" bg-primary hover:bg-primary-700 text-white font-bold py-4 px-6 rounded">
            {/* // TODO position absolute */}
            {props.prefixIcon ? <span> {props.prefixIcon} </span> : null}
            {props.label}
        </button>
    )
}

// React feature
Button.defaultProps = {
    size: "md",
    onClick: () => null,
}
