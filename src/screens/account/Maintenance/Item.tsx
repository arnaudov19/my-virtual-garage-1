import React from "react"
import { ButtonRed } from "../../../components/buttons/ButtonRed"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"

export type MaintenanceListItem = {
    id: string
    name?: string
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
            <FormTextInput value={props.item.name} name="item" disabled={props.item.disabled} />
            <div className="flex w-12 items-center">
                <ButtonRed label="Delete" onClick={props.deleteItem} />
                <ButtonRed disabled={props.item.disabled} label="Save" onClick={props.saveItem} />
                <ButtonRed disabled={!props.item.disabled} label="Edit" onClick={props.editItem} />
            </div>
        </li>
    )
}
