import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { AccountDetailedCarInfo } from "./AccountDetailedCarInfo"
import { AccountGeneralCarInfo } from "./AccountGeneralCarInfo"
import { AccountCredentials } from "./AccountCredentials"
import { SidebarLayout } from "../../components/side-bar-layout/SideBarLayout"
import { AccountMaintenance } from "./Maintenance/AccountMaintenance"

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

    const onLogoutBtnClicked = () => {
        props.onSetPage(5)
    }

    return (
        <div className="flex flex-row items-center">
            <SidebarLayout>
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
            </SidebarLayout>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {activeMenuItemId === 1 ? (
                    <AccountDetailedCarInfo carBrand={props.carBrand} carModel={props.carModel} />
                ) : null}
                {activeMenuItemId === 2 ? <AccountGeneralCarInfo /> : null}
                {activeMenuItemId === 3 ? (
                    <AccountCredentials
                        email={props.email}
                        password={props.password}
                        confirmPassword={props.confirmPassword}
                    />
                ) : null}
                {activeMenuItemId === 4 ? <AccountMaintenance /> : null}
                {activeMenuItemId === 5 ? onLogoutBtnClicked() : null}
            </div>
        </div>
    )
}
