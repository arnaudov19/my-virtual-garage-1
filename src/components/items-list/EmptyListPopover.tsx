/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon } from "@heroicons/react/solid"
import { useState } from "react"

type Props = {
    onClick?: () => void
    title?: string
    description?: string
    btnName?: string
}

export const EmptyListPopover = (props: Props) => {
    return (
        <div className="text-center ease-out duration-200">
            <p>{props.description}</p>
            <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
            </svg>
            <h3 className="mt-2 text-md font-medium text-gray-900">{props.title}</h3>
            <div className="mt-6">
                <button
                    onClick={props.onClick}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-lg text-md font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    {props.btnName}
                </button>
            </div>
        </div>
    )
}
