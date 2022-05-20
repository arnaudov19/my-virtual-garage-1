import React from "react"
import { UserDataContainer } from "../components/UserDataContainer"
import UserProfilePage from "./UserProfilePage"
type Props = {
    kmOnPurchase: number
    currentPage: number
    onSetPage: (page: number) => void
}

const MaintenanceScreen = (props: Props) => {
    const userInput = {
        // userEmail: props.customerEmail,
        // userPassword: props.customerPassword,
        // newlyPurchased: props.newPurchased,
        // carModel: props.carModel,
        kmOnPurchase: props.kmOnPurchase,
    }
    return (
        <div>
            <div className="py-10">
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Maintanance</h3>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Kilometres on Purchase</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{props.kmOnPurchase}</dd>
                                    </div>{" "}
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Displacement</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Price</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Power</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Fuel Type</dt>
                                        <dd className="mt-1 text-sm text-gray-900"></dd>
                                    </div>{" "}
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Oil type</dt>
                                        <dd className="mt-1 text-sm text-gray-900"></dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MaintenanceScreen
