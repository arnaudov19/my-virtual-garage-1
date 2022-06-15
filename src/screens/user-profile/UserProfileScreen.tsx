import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from "@heroicons/react/outline"
import Item from "antd/lib/list/Item"
import { useState } from "react"
import { ButtonSmall } from "../../components/buttons/ButtonSmall"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { ConfirmationModal } from "../../components/modal/ConfirmationModal"
import { BrandFormSelectInput } from "../sign-up/forms/BrandFormSelectInput"
import { GeneralCarInfoForm } from "../sign-up/forms/GeneralCarInfoForm"
import { UserProfileForm } from "./UserProfileForm"
import { UserProfileFormContainer } from "./UserProfileFormContainer"

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

    const [id, setId] = useState(1)

    const newCurrentValue = [...sideBarOptions]
    const onSideBarOptionClicked = (index: any) => {
        if (newCurrentValue[index].id === 1) {
            newCurrentValue[index].current = true
            newCurrentValue[1].current = false
            newCurrentValue[2].current = false
            newCurrentValue[3].current = false
            setSideBarOptions(newCurrentValue)
            setId(newCurrentValue[index].id)
        } else if (newCurrentValue[index].id === 2) {
            newCurrentValue[index].current = true
            newCurrentValue[0].current = false
            newCurrentValue[2].current = false
            newCurrentValue[3].current = false
            setId(newCurrentValue[index].id)
            setSideBarOptions(newCurrentValue)
        } else if (newCurrentValue[index].id === 3) {
            newCurrentValue[index].current = true
            newCurrentValue[0].current = false
            newCurrentValue[1].current = false
            newCurrentValue[3].current = false
            setId(newCurrentValue[index].id)
            setSideBarOptions(newCurrentValue)
        } else if (newCurrentValue[index].id === 4) {
            newCurrentValue[index].current = true
            newCurrentValue[0].current = false
            newCurrentValue[1].current = false
            newCurrentValue[2].current = false
            setId(newCurrentValue[index].id)
            props.onSetPage(0)
            setSideBarOptions(newCurrentValue)
            console.log(sideBarOptions)
        }
    }
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
                            {sideBarOptions.map((item, index) => (
                                <a
                                    onClick={() => onSideBarOptionClicked(index)}
                                    key={item.id}
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {id === 1 ? (
                    <UserProfileFormContainer>
                        <h1 className="text-2xl">Edit your crentials</h1>
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
                    </UserProfileFormContainer>
                ) : null}
                {id === 2 ? (
                    <UserProfileFormContainer>
                        <BrandFormSelectInput className="w-96" label="Car Brand" value={props.carBrand} />
                        <FormTextInput className="w-96" label="Car Model" />
                        <div className="flex justify-around w-96 pt-14">
                            <ButtonSmall label="Back" onClick={onBackBtnClicked} size="lg" />
                            <ButtonSmall label="Save" size="lg" />
                        </div>
                    </UserProfileFormContainer>
                ) : null}
                {id === 3 ? <UserProfileFormContainer></UserProfileFormContainer> : null}
            </div>
        </div>
    )
}
