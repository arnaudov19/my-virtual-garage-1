import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../router/selectors"
import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { getLoggedInUser, getUserEmail } from "../screens/login/selectors"
import { loginBtnClicked } from "../screens/login/actions"
import AccountGeneralCarInfo from "../screens/account/AccountGeneralCarInfo/AccountGeneralCarInfo"

type Props = {
    screen: SCREEN_NAME
    userEmail: string
    isLoggedIn: boolean
}

const General = (props: Props) => {
    return (
        <BasicLayout>
            <AccountGeneralCarInfo
                isCustomerLoggedIn={props.isLoggedIn}
                userEmail={props.userEmail}
                screenName={props.screen}
            />
        </BasicLayout>
    )
}

const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
    userinfo: getLoggedInUser(state),
    userEmail: getUserEmail(state),
    isLoggedIn: getLoggedInUser(state),
})

const mapDispatchToProps = {
    onLoginBtnClicked: loginBtnClicked,
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(General)
