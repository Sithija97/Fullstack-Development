import React from 'react'

const Ticket = ({ticket}) => {
  return (
    <tr>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{ticket.name}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{ticket.description}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{ticket.type}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className="text-sm text-gray-500">{ticket.project.name}</div>
      </td>
      <td className="text-left px-2 py-4 whitespace-nowrap font-medium text-sm">
        <button className="text-indigo-600 hover:text-indigo-800 px-4">Edit</button>
        <button className="text-red-600 hover:text-red-800 px-4">Delete</button>
      </td>
    </tr>
  )
}

export default Ticket