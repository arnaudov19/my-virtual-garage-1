import React from "react"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { SignupContainer } from "./SignupContainer"
import { DetailedCarInfoForm, DetailedCarInfoValues } from "./forms/DetailedCarInfoForm"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    onCollectDetailedCarInfoValues: (values: any) => void
    kilometresOnPurchase?: string
    price: string
    fuel: string
    displacement: string
    power: string
    oilType: string
}

const CreateUserDetailedCarInfo = (props: Props) => {
    const onNextBtnClicked = () => {
        props.onSetPage(1)
        console.log("btn clicked")
    }
    const onBackBtnClicked = (page: number) => {
        props.onSetPage(page)
    }
    const collectGeneralCarInfoData = (values: DetailedCarInfoValues) => {
        props.onCollectDetailedCarInfoValues(values)
        onNextBtnClicked()
    }
    return (
        <SignupContainer>
            <ProgressSteps currentStep={2} />
            <div className="w-full flex justify-center gap-6">
                <DetailedCarInfoForm
                    onSetPage={(page: number) => onBackBtnClicked(page)}
                    onSumbit={collectGeneralCarInfoData}
                />
            </div>
        </SignupContainer>
    )
}

export default CreateUserDetailedCarInfo
