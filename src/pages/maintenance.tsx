import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../router/selectors"
import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { AccountMaintenance } from "../screens/account/Maintenance/AccountMaintenance"

type Props = {
    screen: SCREEN_NAME
}

const Maintenance = (props: Props) => {
    return (
        <BasicLayout>
            <AccountMaintenance />
        </BasicLayout>
    )
}

const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
})

const mapDispatchToProps = {
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(Maintenance)
