import { useState } from "react"
import * as uuid from "uuid"
import { ButtonSimple } from "../../../components/buttons/ButtonSimple"
import { Item, MaintenanceListItem } from "./Item"
import { EmptyListPopover } from "../../../components/items-list/EmptyListPopover"
import { Form } from "antd"

export const ItemsList = () => {
    const [listItems, setListItems] = useState<MaintenanceListItem[]>([])
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false)

    const handleSubmit = (values: any) => {
        // TODO MOST IMPORTANTEST EVER IN THE WORLD
        //  DO WHATEVER YOU WANT WITH DATA

        console.log("Success:", values)
    }
    const addItem = () => {
        setListItems([...listItems, { id: uuid.v4(), name: "Item name: ", disabled: false }])
        setIsAddBtnClicked(true)
    }
    const deleteItem = (id: string) => {
        const newList = listItems.filter((listItems) => listItems.id !== id)
        setListItems(newList)
    }
    const handleInputDisabling = (id: string) => {
        const newArr = listItems.map((item) => {
            if (item.id! === id) {
                return { ...item, disabled: true }
            }
            return item
        })
        setListItems(newArr)
    }
    const handleInputEnabling = (id: string) => {
        const newArr = listItems.map((item) => {
            if (item.id! === id) {
                return { ...item, disabled: false }
            }
            return item
        })
        setListItems(newArr)
    }

    return (
        <div>
            <Form>
                {listItems.length === 0 ? (
                    <EmptyListPopover
                        description="No new records yet, click 'Add' to add new one."
                        btnName="Add"
                        onClick={addItem}
                    />
                ) : (
                    <>
                        <ul role="list" className="space-y-3">
                            <div className="absolute right-4 top-28">
                                <ButtonSimple label="Add an item" onClick={addItem} />
                            </div>
                            {listItems.map((item) => (
                                <>
                                    <Item
                                        key={item.id}
                                        item={{
                                            id: item.id,
                                            name: item.name,
                                            disabled: item.disabled,
                                        }}
                                        saveItem={() => handleInputDisabling(item.id)}
                                        editItem={() => handleInputEnabling(item.id)}
                                        deleteItem={() => deleteItem(item.id)}
                                    />
                                </>
                            ))}
                        </ul>
                    </>
                )}
            </Form>
        </div>
    )
}
