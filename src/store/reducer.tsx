// @flow

import { combineReducers } from "redux"
import type { StateObject } from "./state"
import { authReducer, createDefaultAuthState } from "../auth/authReducer"
import { createDefaultRooterState, rooterReducer } from "../router/rooterReducer"

export const initialState: StateObject = {
    auth: createDefaultAuthState(),
    rooter: createDefaultRooterState(),
}

export const reducer = combineReducers({
    auth: authReducer,
    rooter: rooterReducer,
})
