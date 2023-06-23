import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from 'react'
import PageComponent from '../components/PageComponent'
import TButton from '../components/core/TButton'
import ViewRecord from "./ViewRecord";

export default function Dashboard() {
    return (
        <PageComponent title="Dashboard"
            buttons={
                <TButton color="green" to="/newrecord">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create new
                </TButton>}>
            Dashboard
        </PageComponent>
    )
}
