import { loginBtnClicked } from "../screens/login/actions"
import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../router/selectors"
import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { getLoggedInUser, getUserEmail } from "../screens/login/selectors"
import AccountDetailedCarInfo from "../screens/account/AccountDetailedCarInfo/AccountDetailedCarInfo"

type Props = {
    screen: SCREEN_NAME
    userEmail: string
    isLoggedIn: boolean
}

const Info = (props: Props) => {
    console.log(props.screen)
    return (
        <BasicLayout>
            <AccountDetailedCarInfo
                isCustomerLoggedIn={props.isLoggedIn}
                userEmail={props.userEmail}
                carBrand={"Skoda"}
                carModel={"Octavia"}
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

export default connect(mapStateToProps, mapDispatchToProps)(Info)
