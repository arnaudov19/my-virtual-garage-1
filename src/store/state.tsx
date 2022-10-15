import { LoginState } from "../screens/login/reducer"
import { RooterState } from "../router/rooterReducer"
import { InfoState } from "../screens/account/AccountGeneralCarInfo/reducer"
import { SignUpState } from "../screens/sign-up/reducer"

export type StateObject = {
    login: LoginState
    info: InfoState
    rooter: RooterState
    signUp: SignUpState
}
