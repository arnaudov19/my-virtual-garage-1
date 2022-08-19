import { ContentLayout } from "./ContentLayout"
import SideBarLayout from "./SideBarLayout"

type Props = {
    children?: React.ReactNode
}

export const BasicLayout = (props: Props) => {
    return (
        <div className="flex">
            <SideBarLayout />
            <ContentLayout>{props.children}</ContentLayout>
        </div>
    )
}
