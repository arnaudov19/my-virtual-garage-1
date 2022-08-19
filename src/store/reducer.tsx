// @flow

import { combineReducers } from "redux"
import type { StateObject } from "./state"
import { loginReducer, createDefaultLoginState } from "../screens/login/reducer"
import { createDefaultRooterState, rooterReducer } from "../router/rooterReducer"

export const initialState: StateObject = {
    login: createDefaultLoginState(),
    rooter: createDefaultRooterState(),
}

export const reducer = combineReducers({
    login: loginReducer,
    rooter: rooterReducer,
})
