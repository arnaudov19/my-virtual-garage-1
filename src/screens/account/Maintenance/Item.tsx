import React, { useRef, useState } from "react"
import { ButtonSmall } from "../../../components/buttons/ButtonSmall"
import { FormSelectInput } from "../../../components/form-input-fields/FormSelectInput"
import * as uuid from "uuid"
import { FormTextInput } from "../../../components/form-input-fields/FormTextInput"
import { FormDatePicker } from "../../../components/form-input-fields/FormDatePicker"
import { Tooltip } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"

export type MaintenanceListItem = {
    id: string
    name?: string
    disabled: boolean
}
const MaintenanceTypes = [
    { id: uuid.v4(), name: "Replacement", value: "replacement" },
    { id: uuid.v4(), name: "Repair", value: "repair" },
    { id: uuid.v4(), name: "Check", value: "check" },
    { id: uuid.v4(), name: "Rectification", value: "rectification" },
    { id: uuid.v4(), name: "Addition", value: "addition" },
    { id: uuid.v4(), name: "Man Power", value: "manPower" },
]

type Props = {
    item: MaintenanceListItem
    deleteItem: () => void
    saveItem: () => void
    editItem: () => void
}

export const Item = (props: Props) => {
    const [maintenanceType, setMaintenanceType] = useState("")

    console.log("getMaintenanceType: ", maintenanceType)
    return (
        <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
            <div className="flex gap-2">
                <div className="w-1/2">
                    <FormSelectInput
                        placeholder="Type of Activity"
                        disabled={props.item.disabled}
                        optionsList={MaintenanceTypes}
                    />
                    <FormDatePicker placeholder="Activity Date" className="w-full" disabled={props.item.disabled} />
                </div>
                <div className="w-1/2">
                    <FormTextInput
                        placeholder="Distance"
                        disabled={props.item.disabled}
                        suffix={
                            <Tooltip title="Extra Information">
                                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                            </Tooltip>
                        }></FormTextInput>
                    <FormTextInput placeholder="Expenses" disabled={props.item.disabled} />
                </div>
            </div>
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
