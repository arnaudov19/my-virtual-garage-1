import React, { Fragment, useState } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { UserDataContainer } from "../components/UserDataContainer"
import MaintenanceScreen from "./MaintanaceScreen"
import { Main } from "next/document"

const user = {
    name: "Martin Arnaudov",
    email: "arny@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}
const navigation = [
    { name: "General Car Info", current: true },
    { name: "Detailed Car Info", current: false },
    { name: "Maintenance", current: false },
    { name: "Documents", current: false },
]
const userNavigation = [{ name: "Your Profile" }, { name: "Settings" }, { name: "Sign out" }]

const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(" ")
}

type Props = {
    onSetPage: (page: number) => void
    currentPage?: number
    customerEmail?: string
    customerPassword?: string
    newPurchased?: string
    carModel?: string
    /*    carBrand: string
    registrationDate: string
    purchaseDate: string*/
}

const UserProfilePage = (props: Props) => {
    const [isTab, setIsTab] = useState(true)
    const [currenTab, setCurrenTab] = useState("")

    const logOutHandler = () => {
        props.onSetPage(0)
    }
    const handleTab = (tabName: string) => {
        setCurrenTab(tabName)
        if (currenTab === "Detailed Car Info") {
            props.onSetPage(7)
        } else if (currenTab === "Maintenance") {
            props.onSetPage(8)
        } else if (currenTab === "Documents") {
            props.onSetPage(1)
        } else if (currenTab === "General Car Info") {
            props.onSetPage(2)
        } else {
            return undefined
        }

        // for (let i = 0; i <= 0; i++) {
        //     if (currenTab === navigation[i].name) {
        //         return (navigation[i].current = true)
        //     }
        //     setIsTab(navigation[i].current)
        // }
    }
    console.log(currenTab)
    console.log(navigation)
    console.log(isTab)

    const userInput = {
        userEmail: props.customerEmail,
        userPassword: props.customerPassword,
        newlyPurchased: props.newPurchased,
        carModel: props.carModel,
    }
    return (
        <>
            <body style={{ display: "inherit", justifyContent: "flex-start" }}>
                <div className="min-h-full">
                    <Disclosure as="nav" className="bg-white border-b border-gray-200">
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex justify-between h-16">
                                        <div className="flex">
                                            <div className="flex-shrink-0 flex items-center">
                                                <img
                                                    className="block lg:hidden h-8 w-auto"
                                                    src={require("../img/my-virtual-garage-logo.png")}
                                                    alt="Workflow"
                                                />
                                                <img
                                                    className="hidden lg:block h-8 w-auto"
                                                    src={require("../img/my-virtual-garage-logo.png")}
                                                    alt="My Virtual garage"
                                                />
                                            </div>
                                            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                                                {navigation.map((item) => {
                                                    return (
                                                        <a
                                                            onClick={() => handleTab(item.name)}
                                                            key={item.name}
                                                            className={classNames(
                                                                item.current
                                                                    ? "border-sky-500 text-gray-900"
                                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                                                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                            )}
                                                            aria-current={item.current ? "page" : undefined}>
                                                            {item.name}
                                                        </a>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                            <button
                                                type="button"
                                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-3 relative">
                                                <div>
                                                    <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="h-8 w-8 rounded-full"
                                                            src={user.imageUrl}
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95">
                                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    onClick={logOutHandler}
                                                                    className={classNames(
                                                                        active ? "bg-gray-100" : "",
                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                    )}>
                                                                    Sign Out
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <div className="-mr-2 flex items-center sm:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>
                                <Disclosure.Panel className="sm:hidden">
                                    <div className="pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                /*href={item.href}*/
                                                className={classNames(
                                                    item.current
                                                        ? "bg-sky-50 border-sky-500 text-sky-700"
                                                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                                                    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}>
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                    <div className="pt-4 pb-3 border-t border-gray-200">
                                        <div className="flex items-center px-4">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-base font-medium text-gray-800">{user.name}</div>
                                                <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                            </div>
                                            <button
                                                type="button"
                                                className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span className="sr-only">View notifications</span>
                                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </body>
        </>
    )
}
export default UserProfilePage
