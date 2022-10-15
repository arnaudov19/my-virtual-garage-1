import { connect } from "react-redux"

import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { getCurrentScreenName } from "../router/selectors"
import AccountCredentials from "../screens/account/AccountCredentials/AccountCredentials"
import { getUserEmail } from "../screens/login/selectors"

type Props = {
    screen: SCREEN_NAME
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
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)
