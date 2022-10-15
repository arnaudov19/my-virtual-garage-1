import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { useRouter } from "next/router"
import { classNames } from "../../utils/utils"
import { getCurrentScreenName } from "../../router/selectors"
import { routerScreenChanged } from "../../router/actions"
import { connect } from "react-redux"

type MenuItem = {
    id: SCREEN_NAME
    name: string
    icon: any
}

const menuItems: MenuItem[] = [
    { name: "General Info", icon: UsersIcon, id: SCREEN_NAME.GENERAL },
    { name: "Detailed Info", icon: HomeIcon, id: SCREEN_NAME.INFO },
    { name: "User Credentials", icon: FolderIcon, id: SCREEN_NAME.CREDENTIALS },
    { name: "Maintenance", icon: FolderIcon, id: SCREEN_NAME.MAINTENANCE },
]
type Props = {
    children?: React.ReactNode
    activeMenuItemId: SCREEN_NAME
    setActiveMenuItemId: (id: SCREEN_NAME) => void
}

export const ResponsiveSideBarLayout = (props: Props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const router = useRouter()

    const onMenuItemClicked = (id: SCREEN_NAME) => {
        props.setActiveMenuItemId(id)
        router.push(id)
    }
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full">
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <svg
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                        <div className="flex flex-shrink-0 items-center px-4">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://files.123freevectors.com/wp-content/uploads/new/transport/171-bmw-car-vector-art.png"
                                                alt="My Virtual Garage Logo"
                                            />
                                        </div>
                                        <nav className="mt-5 space-y-1 px-2">
                                            {menuItems.map((item: MenuItem) => (
                                                <a
                                                    onClick={() => onMenuItemClicked(item.id)}
                                                    key={item.id}
                                                    className={classNames(
                                                        item.id === props.activeMenuItemId
                                                            ? "bg-indigo-50 border-sky-600 text-sky-600"
                                                            : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                                        "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                                                    )}>
                                                    <item.icon
                                                        className={classNames(
                                                            item.id === props.activeMenuItemId
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
                                    <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                                        <a href="#" className="group block flex-shrink-0">
                                            <div className="flex items-center">
                                                <div>
                                                    <img
                                                        className="inline-block h-10 w-10 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt="Tom Cook"
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                                        Tom Cook
                                                    </p>
                                                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                                        View profile
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
                        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                            <div className="flex flex-shrink-0 items-center px-4">
                                <img
                                    className="h-16 w-auto"
                                    src="https://files.123freevectors.com/wp-content/uploads/new/transport/171-bmw-car-vector-art.png"
                                    alt="My virtual Garage"
                                />
                            </div>
                            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                                {menuItems.map((item: MenuItem) => (
                                    <a
                                        onClick={() => onMenuItemClicked(item.id)}
                                        key={item.id}
                                        className={classNames(
                                            item.id === props.activeMenuItemId
                                                ? "bg-indigo-50 border-sky-600 text-sky-600"
                                                : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                            "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                                        )}>
                                        <item.icon
                                            className={classNames(
                                                item.id === props.activeMenuItemId
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
                        <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                            <a href="#" className="group block w-full flex-shrink-0">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="inline-block h-9 w-9 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                            Tom Cook
                                        </p>
                                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                            View profile
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col md:pl-64">
                    <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                        <button
                            type="button"
                            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state: any) => ({
    activeMenuItemId: getCurrentScreenName(state),
})

const mapDispatchToProps = {
    setActiveMenuItemId: routerScreenChanged,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ResponsiveSideBarLayout)
