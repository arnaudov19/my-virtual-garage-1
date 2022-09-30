import React from "react"
import TextArea from "antd/es/input/TextArea"

type Props = {
    disabled: boolean
}
export const FormTextArea = (props: Props) => {
    return (
        <div className="pb-4">
            <TextArea disabled={props.disabled} rows={6} placeholder="maxLength is 6" />
        </div>
    )
}
