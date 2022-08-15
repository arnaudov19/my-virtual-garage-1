import { useState } from "react"
import * as uuid from "uuid"
import { ButtonSimple } from "../buttons/ButtonSimple"
import { Item, MaintenanceListItem } from "./Item"
import { EmptyListPopover } from "./EmptyListPopover"
import { Maybe } from "../../types"
import { Form } from "antd"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { LoginFormValues } from "../../screens/login/LoginForm"

type Props = {
    listValue?: string
}

export const ItemsList = (props: Props) => {
    const [listItems, setListItems] = useState<MaintenanceListItem[]>([])
    const [isAddBtnClicked, setIsAddBtnClicked] = useState(false)
    const [isSaveBtnClicked, setIsSaveBtnClicked] = useState(false)
    const [isEditBtnClicked, setIsEditBtnClicked] = useState(false)

    const handleSubmit = (values: any) => {
        // TODO MOST IMPORTANTEST EVER IN THE WORLD
        //  DO WHATEVER YOU WANT WITH DATA

        console.log("Success:", values)
    }

    const addItem = () => {
        setListItems([...listItems, { id: uuid.v4(), name: null }])
        setIsAddBtnClicked(true)
    }

    const deleteItem = (id: string) => {
        const newList = listItems.filter((listItems) => listItems.id !== id)
        setListItems(newList)
    }

    const handleSaveItem = () => {
        setIsSaveBtnClicked(true)
    }
    const handleEditItem = () => {
        setIsEditBtnClicked(true)
        setIsSaveBtnClicked(false)
    }

    console.log(isSaveBtnClicked)

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
                            {listItems.map((item) => (
                                <>
                                    <Item
                                        key={item.id}
                                        item={{
                                            id: item.id,
                                            name: item.name,
                                            disabled: isSaveBtnClicked,
                                        }}
                                        saveItem={() => handleSaveItem()}
                                        editItem={() => handleEditItem()}
                                        deleteItem={() => deleteItem(item.id)}
                                    />
                                </>
                            ))}
                            <ButtonSimple label="Add item" onClick={addItem} />
                        </ul>
                    </>
                )}
            </Form>
        </div>
    )
}
