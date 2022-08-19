import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { StateObject } from "./state"
import { initialState, reducer } from "./reducer"
import { createWrapper } from "next-redux-wrapper"

// initial states here
const currentState = initialState

// middleware
const middleware = [thunk]

// creating store
//@ts-ignore
export const store = createStore(reducer, currentState, composeWithDevTools(applyMiddleware(...middleware)))

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
