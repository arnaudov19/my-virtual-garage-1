import { SCREEN_NAME } from "./rooterReducer"

export const ROUTER__SCREEN_CHANGED = "router/screen/changed"
export const routerScreenChanged = (screenName: SCREEN_NAME) => ({
    type: ROUTER__SCREEN_CHANGED,
    payload: {
        screenName: screenName,
    },
})
