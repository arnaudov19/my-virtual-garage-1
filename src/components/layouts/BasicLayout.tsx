import { ContentLayout } from "./ContentLayout"
import SideBarLayout from "./SideBarLayout"
import Header from "./Header"

type Props = {
    children?: React.ReactNode
}

export const BasicLayout = (props: Props) => {
    return (
        <div className="flex w-full h-screen">
            <SideBarLayout />
            <div className="flex flex-col items-center w-full h-full overflow-x-hidden">
                <Header />
                <ContentLayout>{props.children}</ContentLayout>
            </div>
        </div>
    )
}
