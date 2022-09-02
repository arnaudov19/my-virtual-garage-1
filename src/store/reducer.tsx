// @flow

import { combineReducers } from "redux"
import type { StateObject } from "./state"
import { loginReducer, createDefaultLoginState } from "../screens/login/reducer"
import { createDefaultRooterState, rooterReducer } from "../router/rooterReducer"
import { createDefaultInfoState, infoReducer } from "../screens/account/AccountDetailedCarInfo/reducer"

export const initialState: StateObject = {
    login: createDefaultLoginState(),
    info: createDefaultInfoState(),
    rooter: createDefaultRooterState(),
}

export const reducer = combineReducers({
    login: loginReducer,
    info: infoReducer,
    rooter: rooterReducer,
})
