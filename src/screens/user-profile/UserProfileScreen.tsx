import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from "@heroicons/react/outline"
import Item from "antd/lib/list/Item"
import { useState } from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"
import { ConfirmationModal } from "../../components/modal/ConfirmationModal"
import { UserProfileForm } from "./UserProfileForm"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    email?: string
    password?: string
    confirmPassword?: string
    carBrand?: string
    carModel?: string
    kmOnPurchase?: string
    price?: string
    fuelType?: string
    displacement?: string
    power?: string
    oilType?: string
    children?: React.ReactNode
}

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ")
}

export const UserProfileScreen = (props: Props) => {
    const [sideBarOptions, setSideBarOptions] = useState([
        { name: "Detailed Info", icon: HomeIcon, current: true, id: 1 },
        { name: "General Info", icon: UsersIcon, current: false, id: 2 },
        { name: "Change Pasword", icon: FolderIcon, current: false, id: 3 },
        { name: "Log Out", icon: CalendarIcon, current: false, id: 4 },
    ])

    const onSideBarOptionClicked = (index: any) => {
        const newCurrentValue = [...sideBarOptions]
        if (newCurrentValue[index].id === 1) {
            newCurrentValue[index].current = true
            newCurrentValue[1].current = false
            newCurrentValue[2].current = false
            newCurrentValue[3].current = false
            setSideBarOptions(newCurrentValue)
        } else if (newCurrentValue[index].id === 2) {
            newCurrentValue[index].current = true
            newCurrentValue[0].current = false
            newCurrentValue[2].current = false
            newCurrentValue[3].current = false
            setSideBarOptions(newCurrentValue)
        } else if (newCurrentValue[index].id === 3) {
            newCurrentValue[index].current = true
            newCurrentValue[0].current = false
            newCurrentValue[1].current = false
            newCurrentValue[3].current = false
            setSideBarOptions(newCurrentValue)
        } else if (newCurrentValue[index].id === 4) {
            newCurrentValue[index].current = true
            newCurrentValue[0].current = false
            newCurrentValue[1].current = false
            newCurrentValue[2].current = false
            setSideBarOptions(newCurrentValue)
            console.log(sideBarOptions)
        }
    }
    const onBackBtnClicked = () => {
        props.onSetPage(4)
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-row w-96 h-screen">
                <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4 space-y-5">
                        <img
                            className="h-16 w-auto"
                            src="https://files.123freevectors.com/wp-content/uploads/new/transport/171-bmw-car-vector-art.png"
                            alt="Workflow"
                        />
                    </div>
                    <div className="mt-5 flex-grow flex flex-col">
                        <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
                            {sideBarOptions.map((item, index) => (
                                <a
                                    onClick={() => onSideBarOptionClicked(index)}
                                    key={item.name}
                                    className={classNames(
                                        item.current
                                            ? "bg-indigo-50 border-sky-600 text-sky-600"
                                            : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                        "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                                    )}>
                                    <item.icon
                                        className={classNames(
                                            item.current ? "text-sky-500" : "text-gray-400 group-hover:text-gray-500",
                                            "mr-3 flex-shrink-0 h-6 w-6"
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div>
                {props.children}
                <p>{props.email}</p>
                <p>{props.password}</p>
                <p>{props.confirmPassword}</p>
                <p>{props.carBrand}</p>
                <p>{props.carModel}</p>
                <p>{props.kmOnPurchase}</p>
                <p>{props.price}</p>
                <p>{props.fuelType}</p>
                <p>{props.displacement}</p>
                <p>{props.power}</p>
                <p>{props.oilType}</p>
                <ButtonSmall label="Back" onClick={onBackBtnClicked} size="lg" />
            </div>
        </div>
    )
}