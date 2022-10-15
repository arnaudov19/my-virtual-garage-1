import { ContentLayout } from "./ContentLayout"
import Header from "./Header"
import ResponsiveSideBarLayout from "./ResponsiveSideBarLayout"

type Props = {
    children?: React.ReactNode
}

export const BasicLayout = (props: Props) => {
    return (
        <div className="flex h-screen">
            <ResponsiveSideBarLayout />
            <div className="flex-col w-full overflow-x-hidden">
                <Header />
                <ContentLayout>{props.children}</ContentLayout>
            </div>
        </div>
    )
}
