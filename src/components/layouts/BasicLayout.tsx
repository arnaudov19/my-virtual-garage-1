import { ContentLayout } from "./ContentLayout"
import SideBarLayout from "./SideBarLayout"
import Header from "./Header"

type Props = {
    children?: React.ReactNode
}

export const BasicLayout = (props: Props) => {
    return (
        <div className="flex h-screen">
            <SideBarLayout />
            <div className="flex-col w-9/12">
                <Header />
                <ContentLayout>{props.children}</ContentLayout>
            </div>
        </div>
    )
}
