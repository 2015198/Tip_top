import React, { useEffect, useState } from 'react'
import data_of_tip_top from "./data_of_tip_top.json"
import PageComponent from '../components/PageComponent';
import { PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from '../components/core/TButton';
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import Dropdown from '../components/core/Dropdown';

export default function ViewRecord() {
    const [records, setRecords] = useState([]);
    const { currentUser, userToken, setCurrentUser, setUserToken } = useStateContext();

    const getRecords = () => {
        axiosClient.get("/records").then(({ data }) => {
            setRecords(data);
        });
    };

    useEffect(() => {
        getRecords();
    }, []);

    const onEdit = () => { };
    const onDelete = () => { };

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-1">
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder='Search by remarks'
                                            name="cash_in"
                                            id="cash_in"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-1">
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            placeholder='Search by date'
                                            name="cash_out"
                                            id="cash_out"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {
                                    (currentUser.role = "manager") ?
                                        (<>
                                            <div className='mt-2'><Dropdown /></div>
                                            <div className='mt-2'><Dropdown /></div>
                                        </>) :
                                        (<></>
                                        )
                                }

                                <div className="sm:col-span-1">
                                    <div className="sm:col-span-1 mt-2">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            ID
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Cash in
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Cash out
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Deposited
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            In hand cash
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Remarks
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Record Date
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            User ID
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Site ID
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.map((items) => (
                                        <tr className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{items.id}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.cash_in}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.cash_out}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.deposited}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.in_hand_cash}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.remark}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.record_date}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.user_id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {items.site_id}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <button onClick={onEdit}>
                                                    <PencilIcon className="h-6 w-5 mr-2" />
                                                </button>
                                                <button onClick={onDelete}>
                                                    <TrashIcon className="h-6 w-5 mr-2" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

