type Props = {
    children?: React.ReactNode
}

export const SidebarLayout = (props: Props) => {
    return (
        <div className="flex flex-row w-96 h-screen">
            <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4 space-y-5">
                    <img
                        className="h-16 w-auto"
                        src="https://files.123freevectors.com/wp-content/uploads/new/transport/171-bmw-car-vector-art.png"
                        alt="My Virtual Garage"
                    />
                </div>
                <div className="mt-5 flex-grow flex flex-col">{props.children}</div>
            </div>
        </div>
    )
}
