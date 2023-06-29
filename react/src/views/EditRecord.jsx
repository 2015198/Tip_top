import React, { useEffect, useState } from 'react'
import axiosClient from '../axios';
import Dropdown from '../components/core/Dropdown';
import Dropdown1 from '../components/core/Dropdown';
import { useLocation } from 'react-router-dom';

const EditRecord = ({ record, onChanged }) => {
    const [cash_in, setCashIn] = useState('');
    const [cash_out, setCashOut] = useState('');
    const [deposited, setDeposited] = useState('');
    const [in_hand_cash, setInHandCash] = useState('');
    const [remark, setRemark] = useState('');
    const [record_date, setRecordDate] = useState('');
    const [error, setError] = useState('');
    const [sites, setSites] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [view_edit, setViewEdit] = useState();

    const handleSelect = (value) => {
        setSelectedValue(value);
    };

    const setData = () => {
        axiosClient.get("/sites").then(({ data }) => {
            setSites(data);
        });
        setCashIn(record.cash_in);
        setCashOut(record.cash_out);
        setDeposited(record.deposited);
        setInHandCash(record.in_hand_cash);
        setRemark(record.remark);
        setSelectedValue(record.site_id);
        setRecordDate(new Date(record.record_date).toISOString().split('T')[0]);
    };

    useEffect(() => {
        setData();
    }, []);

    const onSubmit = () => {
        console.log(record.id);
        axiosClient
            .put(`/records/${record.id}`, {
                cash_in: parseInt(cash_in),
                cash_out: parseInt(cash_out),
                deposited: parseInt(deposited),
                in_hand_cash: parseInt(in_hand_cash),
                remark: remark,
                record_date: record_date,
                site_id: parseInt(selectedValue),
            })
            .then(({ data }) => {
                // Handle success response
                console.log('Record updated successfully');
                // Update the necessary state or perform any other required actions
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(error.response.data.errors).reduce(
                        (accum, next) => [...accum, ...next],
                        []
                    );
                    console.log(finalErrors);
                    setError({ __html: finalErrors.join('<br>') });
                }
                console.error(error);
            });
        console.log(sites);
        onChanged(true);
    };
    // const onSubmit = (ev) => {
    //     ev.preventDefault();
    //     setError({ __html: "" });

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="container" style={{
                    maxWidth: "1000px"
                }} >
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-3">
                                    <label htmlFor="cash_in" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cash In
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="cash_in"
                                            id="cash_in"
                                            required
                                            value={cash_in}
                                            onChange={ev => setCashIn(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="cash_out" className="block text-sm font-medium leading-6 text-gray-900">
                                        Cash Out
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="cash_out"
                                            id="cash_out"
                                            required
                                            value={cash_out}
                                            onChange={ev => setCashOut(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="deposited" className="block text-sm font-medium leading-6 text-gray-900">
                                        Deposited
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="deposited"
                                            id="deposited"
                                            required
                                            value={deposited}
                                            onChange={ev => setDeposited(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="in_hand_cash" className="block text-sm font-medium leading-6 text-gray-900">
                                        In hand cash
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="in_hand_cash"
                                            id="in_hand_cash"
                                            required
                                            value={in_hand_cash}
                                            onChange={ev => setInHandCash(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="remark" className="block text-sm font-medium leading-6 text-gray-900">
                                        Remarks
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="remark"
                                            name="remark"
                                            rows={3}
                                            required
                                            value={remark}
                                            onChange={ev => setRemark(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Remark about todays reord</p>
                                </div>

                                <div className="sm:col-span-3">
                                    <Dropdown1 dropdown={sites} onSelect={handleSelect} />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="record_date" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date of record
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            name="record_date"
                                            id="record_date"
                                            required
                                            value={record_date}
                                            onChange={ev => setRecordDate(ev.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form >
        </>
    )
};

export default EditRecord;
