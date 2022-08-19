import { LOGIN_BTN_CLICKED } from "./actions"

export type AuthState = {
    signedInUser: {
        email: string | null | undefined
        password: string | null | undefined
    }
}

export const createDefaultAuthState = () => ({
    signedInUser: {
        email: null,
        password: null,
    },
})

// SUPLIK WITH THE DATA
export function loginReducer(state: AuthState, action: Object): AuthState {
    if (!state) {
        return createDefaultAuthState()
    }

    //@ts-ignore
    switch (action.type) {
        case LOGIN_BTN_CLICKED:
            return {
                ...state,
                signedInUser: {
                    //@ts-ignore
                    email: action.payload.email,
                    //@ts-ignore
                    password: action.payload.password,
                },
            }

        default:
            return state
    }
}
