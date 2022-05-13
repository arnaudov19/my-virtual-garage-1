import React from "react"
import { Steps } from "antd"
const { Step } = Steps

export const ProgressSteps = (props: any) => {
    return (
        <div className="flex w-5/6 ">
            <Steps className="border-sky-600" current={props.currentStep}>
                <Step title="User Credentials" />
                <Step title={"General Car Info"} />
                <Step title={"Detailed Car Info"} />
            </Steps>
        </div>
    )
}
