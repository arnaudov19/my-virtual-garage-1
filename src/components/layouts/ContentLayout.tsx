type Props = {
    children?: React.ReactNode
}

export const ContentLayout = (props: Props) => {
    return (
        <div className="flex w-full h-5/6 items-center justify-center pb-4 pt-16">
            <div>{props.children}</div>
        </div>
    )
}
