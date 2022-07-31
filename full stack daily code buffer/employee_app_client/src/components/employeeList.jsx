import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/employeeService';
import Employee from './employee';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        setLoading(true);
        try {
            EmployeeService.getEmployees()
                .then((data) => setEmployees(data))
                .catch((e) => console.log("Error: ", e));
        } catch (error) {
            console.log('error :', error);
        }
        setLoading(false)
    }

    const deleteEmployee = (id)=>{
        console.log('id :',id);
        setEmployees(employees.filter(employee => employee.id !==id))
        EmployeeService.deleteEmployee(id)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='container mx-auto my-8'>
            <div className="h-12">
                <button className="rounded bg-slate-600 text-white px-6 py-2 font-semibold" onClick={() => navigate('addEmployee')}>Add Employee</button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email ID</th>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                        </tr>
                    </thead>
                    {!loading && employees.map((employee) =>(
                    <tbody className='bg-white' key={employee.id}>
                        <Employee employee={employee} deleteEmployee={deleteEmployee}/>
                    </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default EmployeeList