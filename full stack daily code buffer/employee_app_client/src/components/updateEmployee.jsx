import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../service/employeeService'

const UpdateEmployee = () => {

    const {id} = useParams();

    const initialState = {
        id:id,
        firstName: '',
        secondName: '',
        email: ''
    }

    const [employee, setEmployee] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = () => {
        setLoading(true);
        try {
            EmployeeService.getEmployeeById(id)
                .then((data) => setEmployee(data))
                .catch((e) => console.log("Error: ", e));
        } catch (error) {
            console.log('error :', error);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
            .then(setEmployee(employee),
                navigate('/employeeList'))
    }

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        const name = e.target.name;
        setEmployee({ ...employee, [name]: value })
    }

    const handleCancel = (e) => {
        e.preventDefault();
        navigate('/employeeList')
    }
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b mt-6">
            <div className="px-8 py-8">
                <div className='front-thin text-2xl'>
                    <h1>Update Employee</h1>
                </div>
                {!loading && (
                <>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">First Name</label>
                    <input type="text" name='firstName' value={employee.firstName} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                    <input type="text" name='secondName' value={employee.secondName} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">Email</label>
                    <input type="email" name='email' value={employee.email} onChange={(e)=>handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2' />
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6" onClick={handleUpdate}>Save</button>
                    <button className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6" onClick={handleCancel}>Cancel</button>
                </div>
                </>)}
            </div>
        </div>
  )
}

export default UpdateEmployee