import { useState, useCallback } from "react"
import { ButtonSmall } from "../buttons/ButtonSmall"
import { ButtonSimple } from "../buttons/ButtonSimple"
import { AccountContainer } from "../../screens/account/AccountFormContainer"
import { TextInput } from "../inputs/TextInput"
import { CustomModal } from "../modals/CustomModal"
import { Modal } from "antd"
import { AddNewItem } from "./AddNewItem"

type Props = {
    listValue?: string
}

export const ItemsList = (props: Props) => {
    const [listItems, setListItems] = useState([{ id: 1, listItem: props.listValue }])
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false)

    const updateItemsList = () => {
        setListItems([...listItems, { id: listItems.length + 1, listItem: props.listValue }])
    }
    const addNewItem = () => {
        setIsModalOpened(true)
    }

    console.log("clicked", isAddBtnClicked)
    return (
        <div>
            <ul role="list" className="space-y-3">
                {listItems.map((item) => (
                    <li key={item.id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                        <p>{item.id}</p>
                        <p>{item.listItem}</p>
                    </li>
                ))}
            </ul>
            {isModalOpened ? (
                <AddNewItem onClick={updateItemsList} listDataValue={props.listValue} isModalOpened={isModalOpened} />
            ) : (
                <p>KOkot</p>
            )}

            <ButtonSimple label="Add New" onClick={addNewItem} />
        </div>
    )
}
