import React, { useState } from "react"
import { ButtonSmall } from "../buttons/ButtonSmall"
import { FormTextInput } from "../form-input-fields/FormTextInput"
import { TextInput } from "../inputs/TextInput"
import { ItemsList } from "./ItemsList"
import { CustomModal } from "../modals/CustomModal"
import { AccountContainer } from "../../screens/account/AccountFormContainer"
import { Modal } from "antd"
import { AccountMaintenance } from "../../screens/account/Maintenance/AccountMaintenance"

type Props = {
    onClick: () => void
    listDataValue: any
    isModalOpened: boolean
}
export const AddNewItem = (props: Props) => {
    const [currentValue, setCurrentValue] = useState("")
    const [isModalOpened, setIsModalOpened] = useState(props.isModalOpened)
    const [isRecordAdded, setIsRecordAdded] = useState(false)

    const inputData = (data: string) => {
        console.log("data", data)
        setCurrentValue(data)
    }
    console.log(isModalOpened)
    const handleCancel = () => {
        setIsModalOpened(false)
        setIsRecordAdded(false)
    }
    const handleOk = () => {
        setIsModalOpened(false)
        setIsRecordAdded(true)
    }

    return (
        <>
            <Modal title="Add item" visible={isModalOpened} onOk={handleOk} onCancel={handleCancel}>
                <AccountContainer nestedClassName="border-none">
                    <div className="flex flex-col justify-center items-center w-3/6 h-96 ">
                        <h1>Add your item.</h1>
                        <TextInput listInputData={inputData} size="large" />
                    </div>
                </AccountContainer>
            </Modal>
            {isRecordAdded ? <ItemsList /> : <AccountMaintenance />}
        </>
    )
}
