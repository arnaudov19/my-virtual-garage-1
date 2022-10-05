import { LoginState } from "../screens/login/reducer"
import { RooterState } from "../router/rooterReducer"
import { InfoState } from "../screens/account/AccountDetailedCarInfo/reducer"

export type StateObject = {
    login: LoginState
    info: InfoState
    rooter: RooterState
}
