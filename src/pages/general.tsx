import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../router/selectors"
import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { AccountGeneralCarInfo } from "../screens/account/AccountGeneralCarInfo/AccountGeneralCarInfo"

type Props = {
    screen: SCREEN_NAME
}

const General = (props: Props) => {
    return (
        <BasicLayout>
            <AccountGeneralCarInfo />
        </BasicLayout>
    )
}

const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
})

const mapDispatchToProps = {
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(General)
