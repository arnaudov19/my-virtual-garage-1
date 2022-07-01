import React, { useState } from "react"
import { EmptyStateComponent } from "../../components/empty-state/EmptyStateComponent"
import ListContainer from "../../components/list-container/list-container"
import { FormModal } from "../../components/modal/FormModal"
import { AccountContainer } from "./AccountFormContainer"

const Records = { id: 0 }

type Props = {
    isEmptyState: boolean
}

export const AccountMaintenance = (props: Props) => {
    return (
        <>
            {props.isEmptyState === true ? (
                <AccountContainer>
                    <EmptyStateComponent
                        isEmptyState={true}
                        title="No records yet"
                        description="Add your first record."
                        btnName="New record"
                    />
                </AccountContainer>
            ) : (
                <FormModal />
            )}
        </>
    )
}
