import React, { useState } from "react"
import "../styles/style.css"
import { Button, Collapse, Descriptions, Table, Input, Menu, Form, Empty, Col, Tabs, Card } from "antd"
import MenuItem from "antd/es/menu/MenuItem"
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import NavigationBar from "../reusable-components/NavigationBar"
import { CustomInputField } from "../reusable-components/CustomInputField"
import CollapseMenu from "../reusable-components/CollapseMenu"
import CustomPasswordInputField from "../reusable-components/CustomPasswordInputField"

type Props = {
    onSetPage: number,
}
const { TabPane } = Tabs

const UserProfilePageV1 = (props: Props) => {
    const { Panel } = Collapse
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("")

    const getUserEmail = (event) => {
        setUserEmail(event.target.value)
        console.log(userEmail)
    }
    const getUserPassword = (event) => {
        setUserPassword(event.target.value)
        console.log(userPassword)
    }
    const getConfirmUserPassword = (event) => {
        setConfirmUserPassword(event.target.value)
        console.log(confirmUserPassword)
    }

    const validateUserPasswords = () => {
        if (confirmUserPassword === userPassword) {
            console.log("Password match!", userPassword)
        } else {
            console.log("Passwords don't match")
        }
    }
    /*---------Form submit + 2-way-binding--------*/

    const submitHandler = (event) => {
        event.preventDefault()

        const userCredentials = {
            email: userEmail,
            password: userPassword,
        }
        console.log(userCredentials)
        setUserEmail("")
        setUserPassword("")
    }
    const logOutHandler = () => {
        props.onSetPage(0)
    }

    const callback = (key) => {
        console.log(key)
    }
    return (
        <>
            <NavigationBar onSetPage={logOutHandler} />
            <div className="user-garage-container">
                <Tabs className="tab-container " defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="General Car Info" key="1">
                        <Descriptions>
                            <Descriptions.Item label="Brand">Skoda</Descriptions.Item>
                            <Descriptions.Item label="Model">Octavia</Descriptions.Item>
                            <Descriptions.Item label="Newly Purchased">Yes</Descriptions.Item>
                            <Descriptions.Item label="Purchase Date">27.09.2020</Descriptions.Item>
                            <Descriptions.Item label="Registration Date">20.05.2010</Descriptions.Item>
                        </Descriptions>
                    </TabPane>
                    <TabPane
                        style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
                        tab="Maintenance"
                        key="2">
                        <Tabs>
                            <TabPane tab="Man Power">
                                <Button
                                    type="primary"
                                    className="bg-lime-500 hover:bg-lime-400 border-lime-500 hover:border-lime-400 focus:bg-lime-500 focus:border-500">
                                    Add New
                                </Button>
                                <Table></Table>
                            </TabPane>
                        </Tabs>
                        <div>
                            <Button
                                className="bg-lime-500 hover:bg-lime-400 border-lime-500 hover:border-lime-400"
                                type="primary">
                                Add Category
                            </Button>
                        </div>
                    </TabPane>
                    <TabPane tab="Edit Credentials" key="3">
                        <form className="alignCenterContainer" onSubmit={submitHandler}>
                            <CustomInputField
                                value={userEmail}
                                onChange={getUserEmail}
                                size="large"
                                label="Email"
                                placeholder="Edit Your Email"
                            />
                            <CustomPasswordInputField
                                value={userPassword}
                                onChange={getUserPassword}
                                size="large"
                                label="Password"
                                placeholder="Edit Your Password"
                                name="password"
                            />
                            <CustomPasswordInputField
                                value={confirmUserPassword}
                                onChange={getConfirmUserPassword}
                                size="large"
                                label="Confirm Password"
                                placeholder="Confirm Your Password"
                                name="confirm-password"
                            />
                            <Button
                                className="bg-lime-500 hover:bg-lime-400 border-lime-500 hover:border-lime-400"
                                onClick={validateUserPasswords}
                                htmlType="submit"
                                type="primary"
                                size="large">
                                Save
                            </Button>
                        </form>
                    </TabPane>
                </Tabs>

                {/*<Collapse defaultActiveKey={["general-info"]} style={{ width: "60%" }}>
                    <Panel header="General Car Info" key="general-info">
                        <Descriptions layout="horizontal">
                            <Descriptions.Item label="Brand">Skoda</Descriptions.Item>
                            <Descriptions.Item label="Model">Octavia</Descriptions.Item>
                            <Descriptions.Item label="Newly Purchased">Yes</Descriptions.Item>
                            <Descriptions.Item label="Purchase Date">27.09.2020</Descriptions.Item>
                            <Descriptions.Item label="Registration Date">20.05.2010</Descriptions.Item>
                        </Descriptions>
                    </Panel>
                    <Panel header="Maintenance" key="maintenance">
                        <CollapseMenu key="man-power" header="Man Power" />
                        <CollapseMenu key="wheels" header="Wheels" />
                        <CollapseMenu key="brakes" header="Brakes" />
                        <CollapseMenu key="liquids-and-oils" header="Liquids and Oils" />
                        <CollapseMenu key="battery" header="Battery" />
                        <CollapseMenu key="filters" header="Filters" />
                        <div>
                            <Button type="primary">Add Category</Button>
                        </div>
                    </Panel>
                    <Panel header="Documents" key="documents">
                        <div className="alignCenterContainer">
                            <Button type="primary">Add Category</Button>
                        </div>
                    </Panel>
                    <Panel
                        style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}
                        header="Edit"
                        key="edit">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                width: "100%",
                            }}>
                            <form className="alignCenterContainer" onSubmit={submitHandler}>
                                <CustomInputField
                                    value={userEmail}
                                    onChange={getUserEmail}
                                    size="large"
                                    label="Email"
                                    placeholder="Edit Your Email"
                                />
                                <CustomPasswordInputField
                                    value={userPassword}
                                    onChange={getUserPassword}
                                    size="large"
                                    label="Password"
                                    placeholder="Edit Your Password"
                                    name="password"
                                />
                                <CustomPasswordInputField
                                    value={confirmUserPassword}
                                    onChange={getConfirmUserPassword}
                                    size="large"
                                    label="Confirm Password"
                                    placeholder="Confirm Your Password"
                                    name="confirm-password"
                                />
                                <Button onClick={validateUserPasswords} htmlType="submit" type="primary" size="large">
                                    Save
                                </Button>
                            </form>
                        </div>
                    </Panel>
                </Collapse>*/}
            </div>
        </>
    )
}

export default UserProfilePageV1
