import React, { useState } from "react"
import { Steps } from "antd"
const { Step } = Steps

type Props = {
    status?: string
    currentStep: number
}

type StepItem = {
    id: number
    name: string
    status: StepStatus
    step: string
}

export enum StepStatus {
    PENDING = "pending",
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
}

export const ProgressSteps = (props: Props) => {
    const steps: StepItem[] = [
        { step: "Step 1", name: "Credentials", status: StepStatus.IN_PROGRESS, id: props.currentStep },
        { step: "Step 2", name: "General Car Info", status: StepStatus.PENDING, id: props.currentStep },
        { step: "Step 3", name: "Detailed Car Info", status: StepStatus.PENDING, id: props.currentStep },
    ]
    const [stepsData, setStepsData] = useState(steps)

    const updateCurrentStatus = (id: number) => {
        console.log(id)
        const currentSteps = stepsData.map((item) => {
            if (id === item.id) {
                return { ...item, status: StepStatus.IN_PROGRESS }
            } else return item
        })

        setStepsData(currentSteps)
        console.log(stepsData)
    }
    return (
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
                {stepsData.map((step: StepItem) => (
                    <li onChange={() => updateCurrentStatus(step.id)} key={step.step} className="md:flex-1">
                        {step.status === StepStatus.COMPLETED ? (
                            <a className="group pl-4 py-2 flex flex-col border-l-4 border-sky-600 hover:border-red-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                                <span className="text-md text-sky-600 font-semibold tracking-wide uppercase group-hover:text-sky-800">
                                    {step.step}
                                </span>
                                <span className="text-md font-medium">{step.name}</span>
                            </a>
                        ) : step.status === StepStatus.IN_PROGRESS ? (
                            <a
                                className="pl-4 py-2 flex flex-col border-l-4 border-sky-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
                                aria-current="step">
                                <span className="text-md text-sky-600 font-semibold tracking-wide uppercase">
                                    {step.step}
                                </span>
                                <span className="text-md font-medium">{step.name}</span>
                            </a>
                        ) : (
                            <a className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                                <span className="text-md text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
                                    {step.step}
                                </span>
                                <span className="text-md font-medium">{step.name}</span>
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
