import React, { useState } from "react"
import { ButtonRed } from "../buttons/ButtonRed"
import { ButtonSimple } from "../buttons/ButtonSimple"
import { TextInput } from "../inputs/TextInput"

type Props = {
    id: number
    listItem?: string
    deleteItem: () => void
}

export const Item = (props: Props) => {
    return (
        <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
            <p>{props.id}</p>
            <p>{props.listItem}</p>
            <TextInput size="md" />
            {/* <ButtonRed label="Delete" onClick={props.deleteItem} /> */}
        </li>
    )
}
