import { Button, Modal } from "antd"
import React, { ReactNode, useState } from "react"
type Props = {
    handleOk: () => void
    handleCancel: () => void
    isModalVisible: boolean
    children: ReactNode
}
export const CustomModal = (props: Props) => {
    return (
        <>
            <Modal title="Add item" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
                {props.children}
            </Modal>
        </>
    )
}
