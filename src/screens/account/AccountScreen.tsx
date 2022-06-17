import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"

import { AccountContainer } from "./AccountFormContainer"
import { ButtonSet } from "../../components/buttons/ButtonSet"
import { AccountDetailedCarInfo } from "./AccountDetailedCarInfo"
import { AccountGeneralCarInfo } from "./AccountGeneralCarInfo"

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
    value?: string
    isLoggedIn?: string
}

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ")
}

type MenuItem = {
    id: number
    name: string
    icon: any
}

const menuItems: MenuItem[] = [
    { name: "Detailed Info", icon: HomeIcon, id: 1 },
    { name: "General Info", icon: UsersIcon, id: 2 },
    { name: "User Credentials", icon: FolderIcon, id: 3 },
    { name: "Maintenance", icon: FolderIcon, id: 4 },
    { name: "Log Out", icon: CalendarIcon, id: 5 },
]

export const AccountScreen = (props: Props) => {
    const [activeMenuItemId, setActiveMenuItemId] = useState(1)

    const onBackBtnClicked = () => {
        props.onSetPage(4)
    }

    return (
        <div className="flex flex-row items-center">
            <div className="flex flex-row w-96 h-screen">
                <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4 space-y-5">
                        <img
                            className="h-16 w-auto"
                            src="https://files.123freevectors.com/wp-content/uploads/new/transport/171-bmw-car-vector-art.png"
                            alt="My Virtual Garage"
                        />
                    </div>
                    <div className="mt-5 flex-grow flex flex-col">
                        <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
                            {menuItems.map((item: MenuItem) => (
                                <a
                                    onClick={() => setActiveMenuItemId(item.id)}
                                    key={item.id}
                                    className={classNames(
                                        item.id === activeMenuItemId
                                            ? "bg-indigo-50 border-sky-600 text-sky-600"
                                            : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                        "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                                    )}>
                                    <item.icon
                                        className={classNames(
                                            item.id === activeMenuItemId
                                                ? "text-sky-500"
                                                : "text-gray-400 group-hover:text-gray-500",
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {activeMenuItemId === 1 ? <AccountDetailedCarInfo /> : null}
                {activeMenuItemId === 2 ? <AccountGeneralCarInfo /> : null}
                {activeMenuItemId === 3 ? (
                    <AccountContainer>
                        <h1 className="text-2xl pb-6">User Credentials</h1>
                        <FormTextInput label="Email" className="w-96" disabled={true} value={props.email} />
                        <FormItemPasswordInput
                            label="Password"
                            disabled={true}
                            className="w-96"
                            value={props.password}
                        />
                        <FormItemPasswordInput
                            label="Confirm Password"
                            disabled={true}
                            className="w-96"
                            value={props.confirmPassword}
                        />
                        <div className="flex justify-around w-96 pt-14">
                            <ButtonSmall label="Back" onClick={onBackBtnClicked} size="lg" />
                            <ButtonSmall label="Save" size="lg" />
                        </div>
                    </AccountContainer>
                ) : null}
            </div>
        </div>
    )
}
