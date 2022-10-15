import { StateObject } from "../../store/state"
import { SignUpState } from "./reducer"

export const getSignUpStateObject = (state: StateObject): SignUpState => state.signUp

export const getSignedUpCredentialsData = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserCredentialsData
export const getSignedUpGeneralData = (state: StateObject): any => getSignUpStateObject(state).signedUpUserGeneralData
export const getSignedUpInfoData = (state: StateObject): any => getSignUpStateObject(state).signedUpUserInfoData

export const getSignedUpGeneralDataModel = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserGeneralData.model
export const getSignedUpGeneralDataBrand = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserGeneralData.brand

export const getSignedUpInfo = (state: StateObject): any => getSignUpStateObject(state).signedUpUserInfoData
export const getSignedUpInfoKmOnPurchase = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserInfoData.kmOnPurchase
export const getSignedUpInfoPrice = (state: StateObject): any => getSignUpStateObject(state).signedUpUserInfoData.price
export const getSignedUpInfoFuelType = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserInfoData.fuelType
export const getSignedUpInfoDisplacement = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserInfoData.displacement
export const getSignedUpInfoCarPower = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserInfoData.carPower
export const getSignedUpInfoOilType = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserInfoData.oilType
