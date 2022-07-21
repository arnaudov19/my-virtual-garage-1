import React, { useState } from "react"
import { EmptyListPopover } from "../../../components/items-list/EmptyListPopover"
import { ItemsList } from "../../../components/items-list/ItemsList"
import { AddNewItemModal } from "../../../components/items-list/AddNewItemModal"

export const AccountMaintenance = () => {
    const [isModalOpened, setisModalOpened] = useState(false)
    const [isModalAddBtnClicked, setisModalAddBtnClicked] = useState(false)

    const addBtnClicked = () => {
        setisModalOpened(true)
    }
    const modalAddBtnClicked = () => {
        setisModalAddBtnClicked(true)
        setisModalOpened(false)
    }

    return (
        <>
            {isModalOpened === false ? (
                <EmptyListPopover btnName="Add" onClick={addBtnClicked} />
            ) : (
                <AddNewItemModal handleOk={() => modalAddBtnClicked} isModalOpened={isModalOpened} />
            )}
        </>
    )
}
