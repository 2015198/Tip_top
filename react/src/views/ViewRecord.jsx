import React, { useEffect, useState } from 'react'
import data_of_tip_top from "./data_of_tip_top.json"
import PageComponent from '../components/PageComponent';
import { PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from '../components/core/TButton';
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import Dropdown from '../components/core/Dropdown';
import CreateRecord from './CreateRecord';
import { Navigate, useNavigate } from 'react-router-dom';
import EditRecord from './EditRecord';

const ViewRecord = ({ onRecordChange, onChanged }) => {
    const [records, setRecords] = useState([]);
    const { currentUser, userToken, setCurrentUser, setUserToken, site } = useStateContext();
    const [search_remark, setSearchRemark] = useState('');
    const [search_date, setSearchDate] = useState('');
    const [error, setError] = useState('');
    const [view_record, setViewRecord] = useState();
    const [$data, setData] = useState();

    const getRecords = () => {
        axiosClient.get("/records").then(({ data }) => {
            setRecords(data);
        });
    };

    useEffect(() => {
        getRecords();
    }, []);

    const onEdit = (id) => {
        onRecordChange(records[[id]]);
        onChanged(false);
    };
    const onDelete = (id) => {
        axiosClient.delete(`/records/data/${id}`)
            .then(response => {
                getRecords();
                console.log("Data deleted");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const onSearch = () => {
        console.log(search_date);
        console.log(search_remark);
        let $data = {skey:'',sdate:''};
        if(search_remark){
            $data.skey = search_remark;
        }
        if(search_date){
            $data.sdate = search_date;
        }
        axiosClient.post(`/records/search`, $data).then(({ data }) => {
            setRecords(data);
        });
    };

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
                                            name="search_remark"
                                            id="search_remark"
                                            onChange={ev => setSearchRemark(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-1">
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            placeholder='Search by date'
                                            name="search_date"
                                            id="search_date"
                                            onChange={ev => setSearchDate(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {
                                    (currentUser.role == "admin") ?
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
                                            onClick={onSearch}
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
                                            S No.
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Record ID
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
                                    {records && records.map((items, index) => (
                                        <tr key={items.id} className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
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
                                                <button onClick={() => onEdit(index)}>
                                                    <PencilIcon className="h-6 w-5 mr-2" />
                                                </button>
                                                <button onClick={() => onDelete(items.id)}>
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
};
export default ViewRecord;

