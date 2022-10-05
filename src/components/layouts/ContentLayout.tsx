type Props = {
    children?: React.ReactNode
}

export const ContentLayout = (props: Props) => {
    return (
        <div className={"w-full h-full "}>
            <div className="flex w-full h-full items-center justify-center pt-16">
                <div>{props.children}</div>
            </div>
        </div>
    )
}
