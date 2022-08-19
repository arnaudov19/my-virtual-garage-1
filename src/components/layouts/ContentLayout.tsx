type Props = {
    children?: React.ReactNode
}

export const ContentLayout = (props: Props) => {
    return <div className="flex">{props.children}</div>
}
