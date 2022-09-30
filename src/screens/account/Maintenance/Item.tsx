import React from "react"
import { ButtonSmall } from "../../../components/buttons/ButtonSmall"
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
            <p>{props.item.name}</p>
            <FormTextInput disabled={props.item.disabled} />
            <div className="flex w-12 items-center">
                {!props.item.disabled ? (
                    <ButtonSmall
                        className={"bg-green-600 hover:bg-green-700 focus:ring-green-500"}
                        disabled={props.item.disabled}
                        label="Save"
                        onClick={props.saveItem}
                    />
                ) : (
                    <ButtonSmall disabled={!props.item.disabled} label="Edit" onClick={props.editItem} />
                )}
                <ButtonSmall
                    className={"bg-red-600 hover:bg-red-700 focus:ring-red-500"}
                    label="Delete"
                    onClick={props.deleteItem}
                />
            </div>
        </li>
    )
}
