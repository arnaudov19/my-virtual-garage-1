import { AccountDetailedCarInfo } from "../screens/account/AccountDetailedCarInfo/AccountDetailedCarInfo"
import { loginBtnClicked } from "../screens/login/actions"
import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"
import { getRooterScreen } from "../router/selectors"
import { SCREEN_NAME } from "../router/rooterReducer"

type Props = {
    screen: SCREEN_NAME
}

const Info = (props: Props) => {
    return <AccountDetailedCarInfo carBrand={"Skoda"} carModel={"Octavia"} screenName={props.screen} />
}

// CONECTING TO REDUX
const mapStateToProps = (state: any) => ({
    screen: getRooterScreen(state),
})

const mapDispatchToProps = {
    onLoginBtnClicked: loginBtnClicked,
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
