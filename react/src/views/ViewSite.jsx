import React from 'react'
import PageComponent from '../components/PageComponent'
import TButton from '../components/core/TButton'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import data_of_tip_top from "./data_of_tip_top.json"

export default function ViewSite() {

    const person = data_of_tip_top.people;

    return (
        <PageComponent title="View Sites"
            buttons={
                <TButton color="green" Navigate to="/newsite">
                    <PlusCircleIcon className="h-6 w-6 mr-2" />
                    Add new site
                </TButton>}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
                <ul role="list" className="divide-y divide-gray-100">
                    {person.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex gap-x-4">
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2">
                    {data.map((post) => (
                        <div className='post' key={post.id}>
                            <h2 className='title'>{post.title}</h2>
                            <p className='content'>{post.content}</p>
                        </div>
                        // <SurveyListItem
                        //     survey={survey}
                        //     key={survey.id}
                        //     onDeleteClick={onDeleteClick}
                        // />
                    ))}
                </div>
            </div> */}
        </PageComponent>
    )
}
