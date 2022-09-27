import { connect } from "react-redux"
import { logoutRequested } from "../../screens/login/actions"
import { useRouter } from "next/router"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { routerScreenChanged } from "../../router/actions"
import { LogoutOutlined } from "@ant-design/icons"

type Props = {
    children?: React.ReactNode
    onLogoutRequested: () => void
    onScreenChange: (screen: SCREEN_NAME) => void
}

const Header = (props: Props) => {
    const router = useRouter()

    const onLogOutRequestClicked = () => {
        // TODO refactor using Redux Thunk
        // Separate to different component, so Header does not know about redirect or any additional logic
        // Redirect to login

        router.push("/login")
        props.onScreenChange(SCREEN_NAME.LOGIN)
        props.onLogoutRequested()
    }

    return (
        <div className="flex flex-col fixed items-end p-5 w-[calc(100%_-_16rem)] shadow-sm">
            <div>
                <a onClick={() => onLogOutRequestClicked()}>
                    <LogoutOutlined className={"text-3xl"} />
                </a>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    onLogoutRequested: logoutRequested,
    onScreenChange: routerScreenChanged,
}
const mapStateToProps = (state: any) => ({})

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Header)
