import React, { useState } from "react"
import { EmptyListPopover } from "../../../components/items-list/EmptyListPopover"
import { ItemsList } from "../../../components/items-list/ItemsList"
import { AddNewItemModal } from "../../../components/items-list/AddNewItemModal"
import { ButtonSimple } from "../../../components/buttons/ButtonSimple"

type Props = {
    isEmptyState?: boolean
}

export const AccountMaintenance = (props: Props) => {
    const [isNewRecord, setIsNewRecord] = useState(true)
    const [isAddedToList, setIsAddToList] = useState(false)
    const [listUpdated, setListUpdated] = useState(false)
    const [listInputValue, setListInputValue] = useState("")
    const [isModalOpened, setIsModalOpened] = useState(false)

    const addNewRecordBtnClicked = () => {
        setIsNewRecord(false)
        setIsAddToList(true)
        setIsModalOpened(true)
    }
    const addListRecordClicked = () => {
        setIsAddToList(false)
        setListUpdated(true)
    }

    const inputData = (data: string) => {
        console.log(data)
        setListInputValue(data)
    }

    return (
        <>
            {isNewRecord ? <EmptyListPopover btnName="Add" onClick={() => addNewRecordBtnClicked()} /> : null}
            {isAddedToList ? (
                <AddNewItemModal
                    listDataValue={inputData}
                    onClick={() => addListRecordClicked()}
                    isModalOpened={isModalOpened}
                />
            ) : null}
            {listUpdated ? (
                <>
                    <ItemsList />
                    <ButtonSimple label="Add New" onClick={addListRecordClicked} />
                </>
            ) : null}
        </>
    )
}
