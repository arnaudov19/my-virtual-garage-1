import { List } from "antd"
import FormItemInput from "antd/lib/form/FormItemInput"
import React, { useState } from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { AddList } from "../../components/lists/AddList"
import { ListContainer } from "../../components/lists/ListContainer"
import { FormModal } from "../../components/modal/FormModal"
import { AccountContainer } from "./AccountFormContainer"

type Props = {
    isEmptyState?: boolean
    inputValue: string
}

export const AccountMaintenance = (props: Props) => {
    const [isNewRecord, setIsNewRecord] = useState(true)
    const [isAddedToList, setIsAddToList] = useState(false)
    const [listUpdated, setListUpdated] = useState(false)

    const addNewRecordBtnClicked = () => {
        setIsNewRecord(false)
        setIsAddToList(true)
    }
    const addListRecordClicked = () => {
        setIsAddToList(false)
        setListUpdated(true)
    }

    return (
        <>
            {isNewRecord ? <AddList btnName="Add" onClick={() => addNewRecordBtnClicked()} /> : null}
            {isAddedToList === true ? (
                <AccountContainer>
                    <FormModal inputValue={props.inputValue} onClick={() => addListRecordClicked()} />
                </AccountContainer>
            ) : null}
            {listUpdated === true ? <ListContainer listValue="tapak" /> : null}
        </>
    )
}
