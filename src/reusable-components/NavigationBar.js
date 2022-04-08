import React from "react"
import { Menu } from "antd"
import "../styles/navigation-styles.css"
import { LogoutOutlined } from "@ant-design/icons"

type Props = {
    onSetPage: number,
}

const NavigationBar = (props: Props) => {
    const setPage = () => {
        props.onSetPage(1)
    }
    return (
        <div className="nav-bar">
            <div>
                <img src={require("../img/my-virtual-garage-logo.png")} />
            </div>
            <div className="nav-menu">
                <div style={{ color: "white" }} onClick={setPage}>
                    <LogoutOutlined style={{ fontSize: "1.5rem", color: "white", cursor: "pointer" }} />
                </div>
                {/* <Menu mode="horizontal" style={{ backgroundColor: "transparent", color: "white" }}>
                                        <Menu.Item key="change-car">Change Car</Menu.Item>
                    <Menu.Item key="edit-profile">Edit Profile</Menu.Item>
                    <Menu.Item onClick={setPage} key={"log-out"}>
                        <LogoutOutlined style={{ fontSize: "1.5rem" }} />
                    </Menu.Item>
                </Menu>*/}
            </div>
        </div>
    )
}
export default NavigationBar
