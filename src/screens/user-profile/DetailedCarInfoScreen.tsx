import React from "react"
import UserProfilePage from "./UserProfilePage"

export const DetailedCarInfoScreen = (props: any) => {
    const userInput = {}
    return (
        <div>
            <div className="py-10">
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Detailed Car Info</h3>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Brand</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Model</dt>
                                        <dd className="mt-1 text-sm text-gray-900"></dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Newly Purchased?</dt>
                                        <dd className="mt-1 text-sm text-gray-900"></dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Purchase Date</dt>
                                        <dd className="mt-1 text-sm text-gray-900">27.09.2020</dd>
                                    </div>{" "}
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">First Registration Date</dt>
                                        <dd className="mt-1 text-sm text-gray-900">20.05.2010</dd>
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
