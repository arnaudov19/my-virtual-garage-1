import React from "react"

type Props = {
    onClick: () => void
    label?: string
    disabled?: boolean
    className?: string
}

export const ButtonSmall = (props: Props) => {
    return (
        <button
            disabled={props.disabled}
            type="button"
            className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm ${props.className}`}
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}
