import React from "react"
import { ButtonRed } from "../buttons/ButtonRed"
import { Maybe } from "../../types"
import { FormTextInput } from "../form-input-fields/FormTextInput"

export type MaintenanceListItem = {
    id: string
    name?: Maybe<string>
    disabled: boolean
}

type Props = {
    item: MaintenanceListItem
    deleteItem: () => void
    saveItem: () => void
    editItem: () => void
}

export const Item = (props: Props) => {
    return (
        <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
            <p>{props.item.id}</p>
            <p>{props.item.name}</p>
            {/*<TextInput disabled={props.disabled} listInputData={inputData} size="md" />*/}
            <FormTextInput name="item" disabled={props.item.disabled} />
            <div className="flex w-12 items-center">
                <ButtonRed label="Delete" onClick={props.deleteItem} />
                <ButtonRed label="Save" onClick={props.saveItem} />
                <ButtonRed label="Edit" onClick={props.editItem} />
            </div>
        </li>
    )
}
