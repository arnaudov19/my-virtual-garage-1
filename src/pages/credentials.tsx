import { loginBtnClicked } from "../screens/login/actions"
import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"

import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { getCurrentScreenName } from "../router/selectors"

type Props = {
    screen: SCREEN_NAME
}

const Credentials = (props: Props) => {
    return (
        <BasicLayout>
            <div>CREDENITALS</div>
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
