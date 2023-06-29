import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react'
import PageComponent from '../components/PageComponent'
import TButton from '../components/core/TButton'
import ViewRecord from "./ViewRecord";
import EditRecord from "./EditRecord";

export default function Records() {
    const [records, setRecords] = useState([]);
    const [view_record, setViewRecord] = useState(true);

    const handleRecordChange = (value) => {
        setRecords(value);
    };
    const handleView = (value) => {
        setViewRecord(value);
    };
    return (
        <PageComponent title="Reports"
            buttons={
                <TButton color="green" to="/newrecord">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Create new
                </TButton>}>
            {(view_record) ?
                (<ViewRecord onRecordChange={handleRecordChange} onChanged={handleView} />) :
                (<EditRecord record={records} onChanged={handleView} />)
            }
        </PageComponent>
    )
}
