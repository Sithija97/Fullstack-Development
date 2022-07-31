import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/employeeService'

const AddEmployee = () => {

    const initialState = {
        firstName: '',
        secondName: '',
        email: ''
    }
    const [state, setState] = useState(initialState)
    const navigate = useNavigate();

    const handleSave = (e) => {
        e.preventDefault();
        EmployeeService.addEmployee(state)
            .then(setState(initialState),
                navigate('/employeeList'))

    }

    const goBack =(e) => {
        e.preventDefault();
        navigate('/employeeList');
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setState({ ...state, [name]: value })
    }

    const handleClear = (e) => {
        e.preventDefault();
        setState({
            firstName: '',
            secondName: '',
            email: ''
        })
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b mt-6">
            <div className="px-8 py-8">
                <div className='front-thin text-2xl'>
                    <h1>Add New Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">First Name</label>
                    <input type="text" name='firstName' value={state.firstName} onChange={handleChange} className='h-10 w-96 border mt-2 px-2 py-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input type="text" name='secondName' value={state.secondName} onChange={handleChange} className='h-10 w-96 border mt-2 px-2 py-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input type="email" name='email' value={state.email} onChange={handleChange} className='h-10 w-96 border mt-2 px-2 py-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6" onClick={handleSave}>Save</button>
                    <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6" onClick={handleClear}>Clear</button>
                    <button className="rounded text-white font-semibold bg-blue-400 hover:bg-blue-700 py-2 px-6" onClick={goBack}>Home</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee