import React, { useState } from "react"
import { TextInput } from "../inputs/TextInput"
import { AccountContainer } from "../../screens/account/AccountFormContainer"
import { Modal } from "antd"

type Props = {
    isModalOpened: boolean
}
export const AddItemPopover = (props: Props) => {
    const [isModalOpened, setIsModalOpened] = useState(props.isModalOpened)

    const inputData = (data: string) => {
        console.log("data: ", data)
    }
    console.log("isModalOpened: ", isModalOpened)

    const handleCancel = () => {
        setIsModalOpened(false)
    }
    const handleOk = () => {
        setIsModalOpened(false)
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
        </>
    )
}
