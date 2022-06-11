import React from "react"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { CreateUserContainer } from "./CreateUserContainer"
import { GeneralCarInfoForm, GeneralCarInfoValues } from "./forms/GeneralCarInfoForm"

type Props = {
    onSetPage: (page: number) => void
    currentPage: number
    onCollectGeneralCarInfoValues: (values: any) => void
    brand: string
    model: string
    purchaseDate: string
    registrationDate: string
}

const CreateUserGeneralCarInfo = (props: Props) => {
    const onNextBtnClicked = () => {
        props.onSetPage(4)
        console.log("btn clicked")
    }
    const onBackBtnClicked = (page: number) => {
        props.onSetPage(page)
    }
    const collectGeneralCarInfoData = (values: GeneralCarInfoValues) => {
        props.onCollectGeneralCarInfoValues(values)
        onNextBtnClicked()
    }
    return (
        <CreateUserContainer>
            <ProgressSteps currentStep={1} />
            <div className="w-full flex justify-center gap-6">
                <GeneralCarInfoForm
                    onSetPage={(page: number) => onBackBtnClicked(page)}
                    onSumbit={collectGeneralCarInfoData}
                />
            </div>
        </CreateUserContainer>
    )
}

export default CreateUserGeneralCarInfo
