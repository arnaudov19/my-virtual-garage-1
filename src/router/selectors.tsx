import { StateObject } from "../store/state"
import { RooterState, SCREEN_NAME } from "./rooterReducer"

export const getRooterStateObject = (state: StateObject): RooterState => state.rooter

export const getRooterScreen = (state: StateObject): SCREEN_NAME => getRooterStateObject(state).currentScreen
