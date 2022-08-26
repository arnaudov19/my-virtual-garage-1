type Props = {
    children?: React.ReactNode
}

export const ContentLayout = (props: Props) => {
    return (
        <div className="flex w-full items-center justify-center pt-4 pb-4">
            <div className="w-5/6">{props.children}</div>
        </div>
    )
}
