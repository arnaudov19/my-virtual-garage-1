import React from "react"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { SignupContainer } from "./SignupContainer"
import { GeneralCarInfoForm, GeneralCarInfoValues } from "./forms/GeneralCarInfoForm"
import { useRouter } from "next/router"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { getCurrentScreenName } from "../../router/selectors"
import { getSignedUpGeneralData } from "./selectors"
import { routerScreenChanged } from "../../router/actions"
import { backBtnClicked, nextBtnClickedGeneral } from "./actions"
import { connect } from "react-redux"

type Props = {
    screenChange: (screenName: SCREEN_NAME) => void
    onCollectGeneralCarInfoValues: (values: any) => void
    onNextBtnClicked: (brand: string, model: string, purchaseDate: string, registrationDate: string) => void
    onBackBtnClicked: () => void
}

const CreateUserGeneralCarInfo = (props: Props) => {
    const router = useRouter()

    const onNextBtnClicked = () => {
        props.screenChange(SCREEN_NAME.SIGN_UP_INFO)
        router.push("./signup-info")
    }
    const onBackBtnClicked = () => {
        props.screenChange(SCREEN_NAME.SIGN_UP_CREDENTIALS)
        props.onBackBtnClicked()
        router.push("./signup-credentials")
    }
    const onCollectGeneralData = (values: GeneralCarInfoValues) => {
        props.onNextBtnClicked(values.brand, values.model, values.purchaseDate, values.registrationDate)
        onNextBtnClicked()
    }
    return (
        <SignupContainer>
            <ProgressSteps currentStep={2} />
            <div className="w-full flex justify-center gap-6">
                <GeneralCarInfoForm onSumbit={onCollectGeneralData} onBackBtnClicked={onBackBtnClicked} />
            </div>
        </SignupContainer>
    )
}
const mapDispatchToProps = {
    screenChange: routerScreenChanged,
    onNextBtnClicked: nextBtnClickedGeneral,
    onBackBtnClicked: backBtnClicked,
}
const mapStateToProps = (state: any) => ({
    screenChange: getCurrentScreenName(state),
    onCollectGeneralCarInfoValues: getSignedUpGeneralData(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserGeneralCarInfo)
