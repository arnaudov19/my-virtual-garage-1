import { LoginState } from "../screens/login/reducer"
import { RooterState } from "../router/rooterReducer"

export type StateObject = {
    login: LoginState
    rooter: RooterState
}
