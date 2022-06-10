import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from "@heroicons/react/outline"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"

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
}
const navigation = [
    { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
    { name: "Team", icon: UsersIcon, href: "#", count: 3, current: false },
    { name: "Projects", icon: FolderIcon, href: "#", count: 4, current: false },
    { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
    { name: "Documents", icon: InboxIcon, href: "#", count: 12, current: false },
    { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ")
}

export const UserProfileScreen = (props: Props) => {
    const onBackBtnClicked = () => {
        props.onSetPage(0)
    }
    return (
        <div className="flex flex-row">
            <div className="flex flex-row w-96 h-screen">
                <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4 space-y-5">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                            alt="Workflow"
                        />
                    </div>
                    <div className="mt-5 flex-grow flex flex-col">
                        <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-indigo-50 border-indigo-600 text-indigo-600"
                                            : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                        "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
                                    )}>
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? "text-indigo-500"
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
            <div>
                <ButtonSmall label="Back" onClick={onBackBtnClicked} size="lg" />
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
            </div>
        </div>
    )
}
