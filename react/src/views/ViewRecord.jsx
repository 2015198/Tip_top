import React from 'react'
import data_of_tip_top from "./data_of_tip_top.json"
import PageComponent from '../components/PageComponent';
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import TButton from '../components/core/TButton';

export default function ViewRecord() {
    const person = data_of_tip_top.people;

    return (
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
                            {person.lastSeen ? (
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                </p>
                            ) : (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    </div>
                                    <p className="text-xs leading-5 text-gray-500">Online</p>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
    )
}
