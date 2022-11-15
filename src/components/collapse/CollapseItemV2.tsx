import { Collapse } from "antd"
import React from "react"
import { ItemsList } from "../../screens/account/Maintenance/ItemsList"
import { BasicLayout } from "../layouts/BasicLayout"
import { StatsData } from "../data-display/stats-data"

const { Panel } = Collapse
const CollapseItem = () => {
    const onChange = (key: any) => {
        console.log(key)
    }
    return (
        <div
            className={
                "flex flex-col items-center justify-around h-[calc(100vh_-_10rem)] w-[calc(100vw_-_18rem)] overflow-y-auto"
            }>
            <StatsData />
            <div className={"flex justify-center w-full overflow-y-auto max-h-[calc(100%_-_15rem)] "}>
                <Collapse
                    className={"w-9/12 rounded-xl overflow-y-auto ease-in"}
                    defaultActiveKey={["1"]}
                    onChange={onChange}>
                    <Panel header="Ordinary Maintenance" key="1">
                        <ItemsList />
                    </Panel>
                    <Panel header="Manpower" key="2">
                        <ItemsList />
                    </Panel>
                    <Panel header="Wheels" key="3">
                        <ItemsList />
                    </Panel>
                    <Panel header="Brakes" key="4">
                        <ItemsList />
                    </Panel>
                    <Panel header="Oils and Liquids" key="5">
                        <ItemsList />
                    </Panel>
                    <Panel header="Filters" key="6">
                        <ItemsList />
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default CollapseItem
