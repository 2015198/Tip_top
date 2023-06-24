import React, { useEffect, useState } from 'react'
import data_of_tip_top from "./data_of_tip_top.json"
import PageComponent from '../components/PageComponent';
import { PencilIcon, PlusCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from '../components/core/TButton';
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';

export default function ViewRecord() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api')
            .then(response => {
                setRecords(response.data);
            });
    }, [])
    // const Records = () => {
    //     const [records, setRecords] = useState([]);
    //     // const [records, setRecords] = useState([]);
    //     // const person = data_of_tip_top.people;

    //     // useEffect(() => {
    //     //     fetchRecords();
    //     // },[]);

    //     // const fetchRecords = async () => {
    //     //     try{
    //     //         const response = await fetch('/api/records');
    //     //         const jsonData = await response.json();
    //     //         setRecords(jsonData);
    //     //     }catch (error){
    //     //         console.log(error);
    //     //     }
    //     // };
    //     // useEffect(() => {
    //     //     axiosClient.get('/records')
    //     //     .then(({ data }) => {
    //     //         setRecords(data.data)
    //     //     })
    //     // })
    //     const fetchRecords = async () => {
    //         const response = await axios.get('/records');
    //         setRecords(response.data);
    //     };
    // };

    return (
        <ul role="list" className="divide-y divide-gray-100">
            {records.map((items) => (
                <li key={items.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{items.cash_in}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{items.cash_out}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{items.deposited}</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            {items.in_hand_cash}
                        </p>
                    </div>
                    <div>
                        <PencilIcon className="h-6 w-5 mr-2" />
                        <TrashIcon className="h-6 w-5 mr-2" />
                    </div>
                </li>
            ))}
        </ul>
    )
}
