import { StateObject } from "../../store/state"
import { LoginState } from "./reducer"

export const getLoginStateObject = (state: StateObject): LoginState => state.login

export const getLoggedInUser = (state: StateObject): any => getLoginStateObject(state).loggedInUser
