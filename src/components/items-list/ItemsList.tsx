import { useState } from "react"

import { ButtonSimple } from "../buttons/ButtonSimple"
import { Item } from "./Item"
import { AddItemPopover } from "./AddItem"

type Props = {
    listValue?: string
}

export const ItemsList = (props: Props) => {
    const [listItems, setListItems] = useState([{ id: 1, listItem: props.listValue }])
    const [isAddBtnClicked, setisAddBtnClicked] = useState(false)

    const addItem = () => {
        setisAddBtnClicked(true)
        setListItems([...listItems, { id: listItems.length + 1, listItem: props.listValue }])
    }

    const deleteItem = () => {
        setListItems([...listItems, { id: listItems.length + 1, listItem: props.listValue }])
    }

    console.log("Is Add Btn Clickd", isAddBtnClicked)

    return (
        <div>
            <ul role="list" className="space-y-3">
                {listItems.map((item) => (
                    <Item key={item.id} id={item.id} listItem={item.listItem} deleteItem={() => deleteItem} />
                ))}
            </ul>
            <ButtonSimple label="Add item" onClick={addItem} />
            {isAddBtnClicked ? <AddItemPopover isModalOpened={isAddBtnClicked} /> : null}
        </div>
    )
}
