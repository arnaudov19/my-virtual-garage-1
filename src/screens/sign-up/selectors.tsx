import { StateObject } from "../../store/state"
import { SignUpState } from "./reducer"

export const getSignUpStateObject = (state: StateObject): SignUpState => state.signUp
export const getSignedUnCredentialsData = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserCredentialsData
export const getSignedUnGeneralData = (state: StateObject): any => getSignUpStateObject(state).signedUpUserGeneralData
export const getSignedUnInfoData = (state: StateObject): any => getSignUpStateObject(state).signedUpUserInfoData
export const getSignedUnGeneralDataModel = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserGeneralData.model
export const getSignedUnGeneralDataBrand = (state: StateObject): any =>
    getSignUpStateObject(state).signedUpUserGeneralData.brand
