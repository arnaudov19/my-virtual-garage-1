import React, { useState } from "react"

type Props = {
    type?: string
    placeholder?: string
    size: string
    listInputData?: any
    disabled?: boolean
}

export const TextInput = (props: Props) => {
    const [inputValue, setInputValue] = useState("")
    const getInputValue = (event: any) => {
        setInputValue(event.target.value)
    }

    return (
        <div className="flex flex-col justify-center w-96 pb-6">
            <input
                className="w-full bg-transparent h-12 border-b-2 text-xl hover:border-b-sky-500 focus:ease-in focus:border-b-sky-600 focus:outline-none"
                onChange={getInputValue}
                type={props.type}
                value={inputValue}
                placeholder={props.placeholder}
                disabled={props.disabled}
            />
        </div>
    )
}
