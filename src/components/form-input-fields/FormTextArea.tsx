import React from "react"
import TextArea from "antd/es/input/TextArea"

export const FormTextArea = () => {
    return (
        <div className="pb-4">
            <TextArea rows={6} placeholder="maxLength is 6" />
        </div>
    )
}
