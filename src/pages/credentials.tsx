import { connect } from "react-redux"

import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { getCurrentScreenName } from "../router/selectors"
import { AccountCredentials } from "../screens/account/AccountCredentials/AccountCredentials"
import { getUserEmail } from "../screens/login/selectors"

type Props = {
    screen: SCREEN_NAME
    userEmail: string
    loggedInEmail: string
}

const Credentials = (props: Props) => {
    return (
        <BasicLayout>
            <AccountCredentials loggedEmail={props.userEmail} />
        </BasicLayout>
    )
}

const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
    userEmail: getUserEmail(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)
