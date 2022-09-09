import { NOTIFICATION_CLOSE_BTN_CLICKED } from "./actions"
import { LOG_OUT_REQUESTED } from "../../login/actions"

export type InfoState = {
    notificationBar: {
        isNotificationClosed: boolean
    }
}

export const createDefaultInfoState = () => ({
    notificationBar: {
        isNotificationClosed: false,
    },
})

export function infoReducer(state: InfoState, action: Record<string, any>): InfoState {
    if (!state) {
        return createDefaultInfoState()
    }

    switch (action.type) {
        case NOTIFICATION_CLOSE_BTN_CLICKED:
            return {
                ...state,
                notificationBar: {
                    isNotificationClosed: true,
                },
            }

        case LOG_OUT_REQUESTED:
            return {
                ...createDefaultInfoState(),
            }

        default:
            return state
    }
}
