import { connect } from "react-redux"
import { loginLogoutRequested } from "../../screens/login/actions"

type Props = {
    children?: React.ReactNode
    onLogoutRequested: () => void
}
// Connect to Redux

const Header = (props: Props) => {
    return (
        <div className="flex flex-col w-full items-end pt-5">
            <div className="">
                {/*// // fire log out requested action*/}
                <a onClick={() => props.onLogoutRequested()}>Logout</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    onLogoutRequested: loginLogoutRequested,
}
const mapStateToProps = (state: any) => ({})

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Header)
