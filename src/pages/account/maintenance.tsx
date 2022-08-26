import { AccountDetailedCarInfo } from "../../screens/account/AccountDetailedCarInfo/AccountDetailedCarInfo"
import { loginBtnClicked } from "../../screens/login/actions"
import { routerScreenChanged } from "../../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../../router/selectors"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { BasicLayout } from "../../components/layouts/BasicLayout"
import { AccountMaintenance } from "../../screens/account/Maintenance/AccountMaintenance"

type Props = {
    screen: SCREEN_NAME
}

// TODO Homework
// Get email from selector
// Show it in AccountDetailCardInfo screen

const Maintenance = (props: Props) => {
    return (
        <BasicLayout>
            <AccountMaintenance />
        </BasicLayout>
    )
}

// CONECTING TO REDUX
const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
})

const mapDispatchToProps = {
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(Maintenance)
