import { LOGIN_BTN_CLICKED } from "./actions"

export type LoginState = {
    loggedInUser: {
        email: string | null | undefined
        password: string | null | undefined
    }
}

export const createDefaultLoginState = () => ({
    loggedInUser: {
        email: null,
        password: null,
    },
})

export function loginReducer(state: LoginState, action: Record<string, any>): LoginState {
    if (!state) {
        return createDefaultLoginState()
    }

    switch (action.type) {
        case LOGIN_BTN_CLICKED:
            return {
                ...state,
                loggedInUser: {
                    email: action.payload.email,
                    password: action.payload.password,
                },
            }
        default:
            return state
    }
}
