import React from "react"
import { FormItemPasswordInput } from "../../components/form-input-fields/FormItemPasswordInput"
import { FormTextInput } from "../../components/form-input-fields/FormTextInput"
import { BrandFormSelectInput } from "../sign-up/forms/BrandFormSelectInput"
import { UserProfileFormContainer } from "./UserProfileFormContainer"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    email?: string
    password?: string
    confirmPassword?: string
    carBrand?: string
    carModel?: string
    kmOnPurchase?: string
    price?: string
    fuelType?: string
    displacement?: string
    power?: string
    oilType?: string
    value?: string
    id?: number
}

export const UserProfileForm = (props: Props) => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                {props.id === 1 ? (
                    <UserProfileFormContainer>
                        <FormTextInput label="Email" className="w-96" disabled={true} value={props.value} />
                        <FormItemPasswordInput label="Password" disabled={true} className="w-96" value={props.value} />
                        <FormItemPasswordInput
                            label="Confirm Password"
                            disabled={true}
                            className="w-96"
                            value={props.value}
                        />
                    </UserProfileFormContainer>
                ) : null}

                <UserProfileFormContainer>
                    <BrandFormSelectInput className="w-96" label="Car Brand" />
                    <FormTextInput className="w-96" label="Car Model" />
                </UserProfileFormContainer>
            </div>
        </>
    )
}
