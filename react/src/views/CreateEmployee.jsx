import React, { useState } from 'react'
import axiosClient from '../axios';

export default function CreateEmployee() {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('');
  const [assigned_site_id, setAssignedSiteID] = useState('');
  const [error, setError] = useState({ __html: '' })

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });


    axiosClient
      .post("/signup", {
        name: fullName,
        email: email,
        password: password,
        password_confirmation: passwordconfirmation,
        role: role,
        assigned_site_id:  parseInt(assigned_site_id),

      })
      .then(({ data }) => {
        console.log(data)
        // setCurrentUser(data.user)
        // setUserToken(data.token)
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
          console.log(finalErrors)
          setError({ __html: finalErrors.join('<br>') })
        }
        console.error(error)
      });
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between items-center mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create a Employee</h1>
        </div>
      </header>
      <form onSubmit={onSubmit}>
        <div className="container" style={{
          maxWidth: "1000px"
        }} >
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="fulname"
                      id="fullname"
                      required
                      value={fullName}
                      onChange={ev => setFullName(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={ev => setEmail(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      value={password}
                      onChange={ev => setPassword(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="passwordconfirmation" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="passwordconfirmation"
                      id="passwordconfirmation"
                      required
                      value={passwordconfirmation}
                      onChange={ev => setPasswordConfirmation(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                    Role
                  </label>
                  <div className="mt-2">
                    <select
                      id="role"
                      name="role"
                      required
                      value={role}
                      onChange={ev => setRole(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option> Admin </option>
                      <option> Manager </option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="assigned_site_id" className="block text-sm font-medium leading-6 text-gray-900">
                    Assigned Site
                  </label>
                  <div className="mt-2">
                    <select
                      id="assigned_site_id"
                      name="assigned_site_id"
                      required
                      value={assigned_site_id}
                      onChange={ev => setAssignedSiteID(ev.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>None</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
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
              Create
            </button>
          </div>
        </div>
      </form >
    </>
  )
}
