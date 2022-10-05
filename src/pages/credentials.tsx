import { loginBtnClicked } from "../screens/login/actions"
import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"

import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { getCurrentScreenName } from "../router/selectors"
import { AccountCredentials } from "../screens/account/AccountCredentials/AccountCredentials"
import { LoginState } from "../screens/login/reducer"
import { getLoggedInUser, getUserEmail } from "../screens/login/selectors"

type Props = {
    screen: SCREEN_NAME
    userEmail: string
    loggedInEmail: string
}

const Credentials = (props: Props) => {
    console.log("email?:  ", props.userEmail)
    return (
        <BasicLayout>
            <AccountCredentials loggedEmail={props.userEmail} />
        </BasicLayout>
    )
}

// SELECTORS
const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
    userEmail: getUserEmail(state),
})

// DISPATCH ACTIONS
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)
