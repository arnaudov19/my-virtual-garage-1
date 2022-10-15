import {
    BACK_BTN_CLICKED,
    CREATE_ACCOUNT_BTN_CLICKED_INFO,
    CREATE_ACCOUNT_REQUESTED,
    NEXT_BTN_CLICKED_CREDENTIALS,
    NEXT_BTN_CLICKED_GENERAL,
} from "./actions"

export type SignUpState = {
    signedUpUserCredentialsData: {
        email: string | null | undefined
        password: string | null | undefined
    }
    signedUpUserGeneralData: {
        brand: string | null | undefined
        model: string | null | undefined
        purchaseDate: string | null | undefined
        registrationDate: string | null | undefined
    }
    signedUpUserInfoData: {
        kmOnPurchase: string | null | undefined
        price: string | null | undefined
        fuelType: string | null | undefined
        displacement: string | null | undefined
        carPower: string | null | undefined
        oilType: string | null | undefined
    }
}

export const createDefaultSignUpState = () => ({
    signedUpUserCredentialsData: {
        email: null,
        password: null,
    },
    signedUpUserGeneralData: {
        brand: null,
        model: null,
        purchaseDate: null,
        registrationDate: null,
    },
    signedUpUserInfoData: {
        kmOnPurchase: null,
        price: null,
        fuelType: null,
        displacement: null,
        carPower: null,
        oilType: null,
    },
})

export function singUpReducer(state: SignUpState, action: Record<string, any>): SignUpState {
    if (!state) {
        return createDefaultSignUpState()
    }
    switch (action.type) {
        case CREATE_ACCOUNT_REQUESTED:
            return {
                ...state,
            }
        case NEXT_BTN_CLICKED_CREDENTIALS:
            return {
                ...state,
                signedUpUserCredentialsData: {
                    email: action.payload.email,
                    password: action.payload.password,
                },
            }
        case NEXT_BTN_CLICKED_GENERAL:
            return {
                ...state,
                signedUpUserGeneralData: {
                    brand: action.payload.brand,
                    model: action.payload.model,
                    purchaseDate: action.payload.purchaseDate,
                    registrationDate: action.payload.registrationDate,
                },
            }
        case CREATE_ACCOUNT_BTN_CLICKED_INFO:
            return {
                ...state,
                signedUpUserInfoData: {
                    kmOnPurchase: action.payload.kmOnPurchase,
                    price: action.payload.price,
                    fuelType: action.payload.fuelType,
                    displacement: action.payload.displacement,
                    carPower: action.payload.carPower,
                    oilType: action.payload.oilType,
                },
            }
        case BACK_BTN_CLICKED:
            return {
                ...createDefaultSignUpState(),
            }
        default:
            return state
    }
}
