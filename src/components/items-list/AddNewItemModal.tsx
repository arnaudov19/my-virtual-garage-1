import React, { useState } from "react"
import { TextInput } from "../inputs/TextInput"
import { ItemsList } from "./ItemsList"
import { AccountContainer } from "../../screens/account/AccountFormContainer"
import { Modal } from "antd"

type Props = {
    onClick: () => void
    listDataValue: any
    isModalOpened: boolean
}
export const AddNewItemModal = (props: Props) => {
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
            <Modal okText={"Add"} title="Add item" visible={isModalOpened} onOk={handleOk} onCancel={handleCancel}>
                <AccountContainer nestedClassName="border-none">
                    <div className="flex flex-col justify-center items-center w-3/6 h-96 ">
                        <h1>Add your first item.</h1>
                        <TextInput listInputData={inputData} size="large" />
                    </div>
                </AccountContainer>
            </Modal>
            {isRecordAdded ? <ItemsList /> : null}
        </>
    )
}
