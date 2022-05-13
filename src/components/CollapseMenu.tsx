import React from "react"
import { Button, Collapse, Empty } from "antd"

const CollapseMenu = (props: any) => {
    const { Panel } = Collapse
    return (
        <Collapse>
            <Panel key={props.key} header={props.header}>
                <div>
                    <Empty />
                    <Button type="primary">Add</Button>
                </div>
            </Panel>
        </Collapse>
    )
}

export default CollapseMenu
