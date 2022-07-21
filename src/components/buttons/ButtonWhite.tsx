import React from "react"

type Props = {
    onClick: () => void
    ref?: any
}

export const ButtonWhite = (props: Props) => {
    return (
        <button
            type="button"
            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:w-auto sm:text-sm"
            onClick={props.onClick}
            ref={props.ref}>
            Cancel
        </button>
    )
}
