// @flow

import { combineReducers } from "redux"
import type { StateObject } from "./state"
import { createDefaultLoginState, loginReducer } from "../screens/login/reducer"
import { createDefaultRooterState, rooterReducer } from "../router/rooterReducer"
import { createDefaultInfoState, infoReducer } from "../screens/account/AccountDetailedCarInfo/reducer"

export const initialState: StateObject = {
    rooter: createDefaultRooterState(),
    login: createDefaultLoginState(),
    info: createDefaultInfoState(),
}

export const reducer = combineReducers({
    rooter: rooterReducer,
    login: loginReducer,
    info: infoReducer,
})
