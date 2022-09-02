import { StateObject } from "../../../store/state"
import { InfoState } from "./reducer"

export const getInfoStateObject = (state: StateObject): InfoState => state.info

export const isAccountDetailNotificationClosed = (state: StateObject): boolean =>
    getInfoStateObject(state).notificationBar.isNotificationClosed
