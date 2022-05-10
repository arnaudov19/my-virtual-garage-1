import React from "react";
import {Steps} from 'antd'
const {Step} = Steps

export const ProgressSteps = (props) => {
    return (
        <div className="steps-container">
        <Steps current={props.currentStep}>
            <Step title="User Credentials" />
            <Step title={"General Car Info"} />
            <Step title={"Detailed Car Info"} />
        </Steps>
        </div>
    )
}