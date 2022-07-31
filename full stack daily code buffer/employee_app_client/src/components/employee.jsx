import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employee = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate();

    const editEmployee = (id)=> {
        // e.preventDefault();
        navigate(`/updateEmployee/${id}`);
    }
    return (
        <tr>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className="text-sm text-gray-500">{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className="text-sm text-gray-500">{employee.secondName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className="text-sm text-gray-500">{employee.email}</div>
            </td>
            <td className="text-left px-2 py-4 whitespace-nowrap font-medium text-sm">
                <button className="text-indigo-600 hover:text-indigo-800 px-4" onClick={()=> editEmployee(employee.id)}>Edit</button>
                <button  className="text-red-600 hover:text-red-800 px-4" onClick={()=> deleteEmployee(employee.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default Employee