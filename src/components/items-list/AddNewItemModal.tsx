import React, { useState } from "react"
import { TextInput } from "../inputs/TextInput"
import { ItemsList } from "./ItemsList"
import { AccountContainer } from "../../screens/account/AccountFormContainer"
import { Modal } from "antd"
import { AccountMaintenance } from "../../screens/account/Maintenance/AccountMaintenance"
import { EmptyListPopover } from "./EmptyListPopover"
import { Item } from "./Item"

type Props = {
    isModalOpened: boolean
    handleOk: () => void
}
export const AddNewItemModal = (props: Props) => {
    const [isModalOpened, setIsModalOpened] = useState(props.isModalOpened)
    const [isFirstRecordAdded, setisFirstRecordAdded] = useState(false)

    const inputData = (data: string) => {
        console.log("data", data)
    }
    console.log("isModalOpened: ", isModalOpened)

    const handleCancel = () => {
        setIsModalOpened(false)
        setisFirstRecordAdded(false)
    }
    const handleOk = () => {
        setIsModalOpened(false)
        setisFirstRecordAdded(true)
    }
    return (
        <>
            <Modal okText={"Add"} title="Add item" visible={isModalOpened} onOk={handleOk} onCancel={handleCancel}>
                <AccountContainer nestedClassName="border-none">
                    <div className="flex flex-col justify-center items-center w-3/6 h-96 ">
                        <h1>Add your first item.</h1>
                        <TextInput listInputData={inputData} size="large" />
                    </div>
                </AccountContainer>
            </Modal>
            {isFirstRecordAdded ? <ItemsList /> : <AccountMaintenance />}
        </>
    )
}
