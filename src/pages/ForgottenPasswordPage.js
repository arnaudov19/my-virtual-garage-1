// @flow
import React, { useState } from "react"
import { CustomInputField } from "../reusable-components/CustomInputField"
import { Button, Form } from "antd"

type Props = {
    onSetPage: (page: number) => void,
}
export const ForgottenPasswordPage = (props: Props) => {
    return (
        <div className="signup-form-container" style={{ width: "450px", height: "350px" }}>
            <Form>
                <h3>Password recovery link will be sent on your email</h3>
                <CustomInputField placeholder="Enter Your Email Address" size="large" />
                <Button type="primary">Send</Button>
            </Form>
        </div>
    )
}
