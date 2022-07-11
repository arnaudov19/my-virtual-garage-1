import { useState, useCallback } from "react"
import { AddNewItemModal } from "../items-list/AddNewItemModal"
import { ButtonSimple } from "../buttons/ButtonSimple"

type Props = {
    listValue?: string
}

export const ItemsList = (props: Props) => {
    const [listItems, setListItems] = useState([{ id: 1, listItem: props.listValue }])
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false)

    const updateItemsList = () => {
        setIsModalOpened(true)
        setIsAddBtnClicked(true)
        setListItems([...listItems, { id: listItems.length + 1, listItem: props.listValue }])
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
            {isAddBtnClicked ? (
                <AddNewItemModal
                    onClick={updateItemsList}
                    listDataValue={props.listValue}
                    isModalOpened={isModalOpened}
                />
            ) : null}
            <ButtonSimple label={"Add new"} onClick={updateItemsList} />
        </div>
    )
}
