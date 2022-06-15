import React from "react"

type Props = {
    className?: string
    nestedClassName?: string
    children?: React.ReactNode
}

export const UserProfileFormContainer = (props: Props) => {
    return (
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${props.className}`}>
            <div className={`flex flex-col items-center max-w-3xl mx-auto border-2 p-6 ${props.nestedClassName}`}>
                {props.children}
            </div>
        </div>
    )
}
