import { routerScreenChanged } from "../router/actions"
import { connect } from "react-redux"
import { getCurrentScreenName } from "../router/selectors"
import { SCREEN_NAME } from "../router/rooterReducer"
import { BasicLayout } from "../components/layouts/BasicLayout"
import { AccountDetailedCarInfo } from "../screens/account/AccountDetailedCarInfo/AccountDetailedCarInfo"
import {
    getSignedUpInfoCarPower,
    getSignedUpInfoDisplacement,
    getSignedUpInfoFuelType,
    getSignedUpInfoKmOnPurchase,
    getSignedUpInfoOilType,
    getSignedUpInfoPrice,
} from "../screens/sign-up/selectors"

type Props = {
    screen: SCREEN_NAME
    kmOnPurchase?: string
    price?: string
    fuelType?: string
    displacement?: string
    power?: string
    oilType?: string
}

const Info = (props: Props) => {
    return (
        <BasicLayout>
            <AccountDetailedCarInfo
                kmOnPurchase={props.kmOnPurchase}
                price={props.price}
                fuelType={props.fuelType}
                displacement={props.displacement}
                carPower={props.power}
                oilType={props.oilType}
            />
        </BasicLayout>
    )
}

const mapStateToProps = (state: any) => ({
    screen: getCurrentScreenName(state),
    kmOnPurchase: getSignedUpInfoKmOnPurchase(state),
    price: getSignedUpInfoPrice(state),
    fuelType: getSignedUpInfoFuelType(state),
    displacement: getSignedUpInfoDisplacement(state),
    power: getSignedUpInfoCarPower(state),
    oilType: getSignedUpInfoOilType(state),
})

const mapDispatchToProps = {
    screenChange: routerScreenChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
