import React from "react"
import { ProgressSteps } from "../../components/progress-steps/ProgressSteps"
import { SignupContainer } from "./SignupContainer"
import { DetailedCarInfoForm, DetailedCarInfoValues } from "./forms/DetailedCarInfoForm"
import { SCREEN_NAME } from "../../router/rooterReducer"
import { useRouter } from "next/router"
import { getCurrentScreenName } from "../../router/selectors"
import { connect } from "react-redux"
import { routerScreenChanged } from "../../router/actions"
import { nextBtnClickedInfo } from "./actions"
import { getSignedUpInfoData } from "./selectors"

type Props = {
    screenChange: (screenName: SCREEN_NAME) => void
    onCollectDetailedCarInfoValues: (values: any) => void
    onNextBtnClicked: (
        kmOnPurchase: string,
        price: string,
        fuel: string,
        displacement: string,
        carPower: string,
        oilType: string
    ) => void
}

const SignUpDetailedInfo = (props: Props): any => {
    const router = useRouter()

    const onNextBtnClicked = () => {
        props.screenChange(SCREEN_NAME.INFO)
        router.push("./info")
    }
    const onBackBtnClicked = () => {
        props.screenChange(SCREEN_NAME.SIGN_UP_GENERAL)
        router.push("./signup-general")
    }
    const collectGeneralCarInfoData = (values: DetailedCarInfoValues) => {
        props.onNextBtnClicked(
            values.kmOnPurchase,
            values.price,
            values.fuelType,
            values.displacement,
            values.carPower,
            values.oilType
        )
        onNextBtnClicked()
        console.log(values)
    }

    return (
        <SignupContainer>
            <ProgressSteps currentStep={2} />
            <div className="w-full flex justify-center gap-6">
                <DetailedCarInfoForm onBackBtnClicked={onBackBtnClicked} onSumbit={collectGeneralCarInfoData} />
            </div>
        </SignupContainer>
    )
}

const mapDispatchToProps = {
    screenChange: routerScreenChanged,
    onNextBtnClicked: nextBtnClickedInfo,
    onCollectDetailedCarInfoValues: getSignedUpInfoData,
}
const mapStateToProps = (state: any) => ({
    screenChange: getCurrentScreenName(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpDetailedInfo)
