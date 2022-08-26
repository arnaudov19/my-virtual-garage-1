import { loginBtnClicked } from "../../screens/login/actions"
import { routerScreenChanged } from "../../router/actions"
import { connect } from "react-redux"

import { SCREEN_NAME } from "../../router/rooterReducer"
import { BasicLayout } from "../../components/layouts/BasicLayout"
import { getCurrentScreenName } from "../../router/selectors"
import { AccountCredentials } from "../../screens/account/AccountCredentials/AccountCredentials"
import { LoginState } from "../../screens/login/reducer"

type Props = {
    screen: SCREEN_NAME
    userEmail: LoginState
}

const Credentials = (props: Props) => {
    return (
        <BasicLayout>
            <AccountCredentials />
        </BasicLayout>
    )
}

// SELECTORS
const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
})

// DISPATCH ACTIONS
const mapDispatchToProps = {
    onLoginBtnClicked: loginBtnClicked,
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)
