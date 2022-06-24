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
    status: string
    steps: string
}

export const ProgressSteps = (props: Props) => {
    // const steps: StepItem[] = [
    //     { steps: "Step 1", name: "Credentials", status: "pending", id: 1 },
    //     { steps: "Step 2", name: "General Car Info", status: "pending", id: 2 },
    //     { steps: "Step 3", name: "Detailed Car Info", status: "pending", id: 3 },
    // ]
    // const [stepsData, setStepsData] = useState(steps)
    // const [currentStatus, setCurrentStatus] = useState([])
    // const [prevItemStatus, setPrevItemStatus] = useState([])
    // const updateCurrentStatus = () => {
    //     const currentSteps = stepsData.map((item) => {
    //         if (item.steps === "Step 1") {
    //             return { ...item, status: "current", steps: "kunda 1" }
    //         } else if (item.steps === "Step 2") {
    //             console.log(item.status, prevItemStatus)
    //             return { ...item, status: "current", steps: "kokot 2" }
    //         } else if (item.steps === "Step 3") {
    //             console.log(item.status, prevItemStatus)
    //             return { ...item, status: "current", steps:"debil 3" }
    //         } else return item
    //     })
    //     console.log(stepsData)
    //     setStepsData(currentSteps)
    // }
    // return (
    //     <nav aria-label="Progress">
    //         <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
    //             {stepsData.map((step: StepItem) => (
    //                 <li onClick={updateCurrentStatus} key={step.id} className="md:flex-1">
    //                     {step.status === "complete" ? (
    //                         <a className="group pl-4 py-2 flex flex-col border-l-4 border-sky-600 hover:border-sky-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
    //                             <span className="text-md text-sky-600 font-semibold tracking-wide uppercase group-hover:text-sky-800">
    //                                 {step.steps}
    //                             </span>
    //                             <span className="text-md font-medium">{step.name}</span>
    //                         </a>
    //                     ) : step.status === "current" ? (
    //                         <a
    //                             className="pl-4 py-2 flex flex-col border-l-4 border-sky-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4"
    //                             aria-current="step">
    //                             <span className="text-md text-sky-600 font-semibold tracking-wide uppercase">
    //                                 {step.steps}
    //                             </span>
    //                             <span className="text-md font-medium">{step.name}</span>
    //                         </a>
    //                     ) : (
    //                         <a className="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
    //                             <span className="text-md text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">
    //                                 {step.steps}
    //                             </span>
    //                             <span className="text-md font-medium">{step.name}</span>
    //                         </a>
    //                     )}
    //                 </li>
    //             ))}
    //         </ol>
    //     </nav>
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
