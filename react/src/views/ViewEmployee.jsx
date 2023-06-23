import React from 'react'
import PageComponent from '../components/PageComponent'
import TButton from '../components/core/TButton'
import { PlusCircleIcon, UserIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import data_of_tip_top from "./data_of_tip_top.json"

export default function ViewEmployee() {

    const person = data_of_tip_top.people;

    return (
        <PageComponent title="View Employees"
            buttons={
                <TButton color="green" to="/signup">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Add new Employee
                </TButton>}>
            <ul role="list" className="divide-y divide-gray-100">
                {person.map((person) => (
                    <li key={person.email} className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">
                                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                            </p>
                        </div>
                        <div>
                            <PencilIcon className="h-6 w-5 mr-2" />
                            <TrashIcon className="h-6 w-5 mr-2" />
                        </div>
                    </li>
                ))}
            </ul>
        </PageComponent>
    )
}
