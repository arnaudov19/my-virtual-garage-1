import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline"
import { classNames } from "../../utils/utils"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { routerScreenChanged } from "../../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../../router/selectors"
import { useRouter } from "next/router"

type MenuItem = {
    id: SCREEN_NAME
    name: string
    icon: any
}

const menuItems: MenuItem[] = [
    { name: "Detailed Info", icon: HomeIcon, id: SCREEN_NAME.INFO },
    { name: "General Info", icon: UsersIcon, id: SCREEN_NAME.GENERAL },
    { name: "User Credentials", icon: FolderIcon, id: SCREEN_NAME.CREDENTIALS },
    { name: "Maintenance", icon: FolderIcon, id: SCREEN_NAME.MAINTENANCE },
    // { name: "Log Out", icon: CalendarIcon, id: SCREEN_NAME.LOG_OUT },
]

type Props = {
    children?: React.ReactNode
    activeMenuItemId: SCREEN_NAME
    setActiveMenuItemId: (id: SCREEN_NAME) => void
}

export const SideBarLayout = (props: Props) => {
    const router = useRouter()

    const onMenuItemClicked = (id: SCREEN_NAME) => {
        props.setActiveMenuItemId(id)
        router.push(id)
    }

    return (
        <div className="flex-row w-96 h-screen relative">
            <div className="fixed flex flex-col flex-grow w-80 border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
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
            </div>
        </div>
    )
}

// getDataFromRedux
const mapStateToProps = (state: any) => ({
    activeMenuItemId: getCurrentScreenName(state),
})

const mapDispatchToProps = {
    setActiveMenuItemId: routerScreenChanged,
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(SideBarLayout)
