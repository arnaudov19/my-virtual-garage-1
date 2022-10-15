export const CREATE_ACCOUNT_REQUESTED = "create/acc/requested"
export const createAccountBtnClicked = () => ({
    type: CREATE_ACCOUNT_REQUESTED,
})
export const NEXT_BTN_CLICKED_CREDENTIALS = "next/btn/clicked/credentials"
export const nextBtnClickedCredentials = (email: string, password: string) => ({
    type: NEXT_BTN_CLICKED_CREDENTIALS,
    payload: {
        email: email,
        password: password,
    },
})

export const NEXT_BTN_CLICKED_GENERAL = "next/btn/clicked/general"
export const nextBtnClickedGeneral = (
    brand: string,
    model: string,
    purchaseDate: string,
    registrationDate: string
) => ({
    type: NEXT_BTN_CLICKED_GENERAL,
    payload: {
        brand: brand,
        model: model,
        purchaseDate: purchaseDate,
        registrationDate: registrationDate,
    },
})
export const CREATE_ACCOUNT_BTN_CLICKED_INFO = "create/account/btn/clicked/info"
export const nextBtnClickedInfo = (
    kmOnPurchase: string,
    price: string,
    fuelType: string,
    displacement: string,
    carPower: string,
    oilType: string
) => ({
    type: CREATE_ACCOUNT_BTN_CLICKED_INFO,
    payload: {
        kmOnPurchase: kmOnPurchase,
        price: price,
        fuelType: fuelType,
        displacement: displacement,
        carPower: carPower,
        oilType: oilType,
    },
})

export const BACK_BTN_CLICKED = "back/btn/clicked"
export const backBtnClicked = () => ({
    type: BACK_BTN_CLICKED,
})
