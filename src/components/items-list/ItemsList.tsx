import { useState } from "react"

import { ButtonSimple } from "../buttons/ButtonSimple"
import { Item } from "./Item"
import { AddItemPopover } from "./AddItem"
import { id } from "postcss-selector-parser"
import { EmptyListPopover } from "./EmptyListPopover"

type Props = {
    listValue?: string
}

export const ItemsList = (props: Props) => {
    const [listItems, setListItems] = useState([{ id: 0, listItem: props.listValue }])
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false)
    const [currentId, setCurrentId] = useState(0)

    const incrementId = () => {
        setCurrentId(listItems.length + 1)
    }

    const addItem = () => {
        setIsAddBtnClicked(true)
        setListItems([...listItems, { id: listItems.length, listItem: props.listValue }])
        setCurrentId(listItems.length + 1)
        console.log(currentId)
    }

    const deleteItem = (id: number) => {
        const newList = listItems.filter((listItems) => listItems.id !== id)
        setCurrentId(listItems.length - 1)
        console.log(currentId)
        setListItems(newList)
    }

    console.log("Is Add Btn Clicked", isAddBtnClicked)
    console.log(listItems.length)

    return (
        <div>
            {currentId <= 0 ? (
                <EmptyListPopover
                    description="No new records yet, click 'Add' to add new one."
                    btnName="Add"
                    onClick={incrementId} //adds new item
                />
            ) : (
                <>
                    <ul role="list" className="space-y-3">
                        {listItems.map((item) => (
                            <>
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    listItem={item.listItem}
                                    deleteItem={() => deleteItem(item.id)}
                                />
                            </>
                        ))}
                        <ButtonSimple label="Add item" onClick={addItem} />
                    </ul>
                </>
            )}
        </div>
    )
}
