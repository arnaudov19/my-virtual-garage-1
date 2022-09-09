import { ROUTER__SCREEN_CHANGED } from "./actions"

export enum SCREEN_NAME {
    LOGIN = "login",
    INFO = "info",
    GENERAL = "general",
    CREDENTIALS = "credentials",
    MAINTENANCE = "maintenance",
    LOG_OUT = "login",
}

export type RooterState = {
    currentScreen: SCREEN_NAME
}

export const createDefaultRooterState = () => ({
    currentScreen: SCREEN_NAME.LOGIN,
})

export function rooterReducer(state: RooterState, action: Object): RooterState {
    if (!state) {
        return createDefaultRooterState()
    }

    //@ts-ignore
    switch (action.type) {
        case ROUTER__SCREEN_CHANGED: {
            return {
                ...state,
                // @ts-ignore
                currentScreen: action.payload.screenName,
            }
        }
        default:
            return state
    }
}
