import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TicketService from "../services/TicketService";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const loadAllTickets = () => {
    TicketService.getAll()
      .then((data) => setTickets(data))
      .catch((e) => console.log("Error: ", e));
  };

  useEffect(() => {
    loadAllTickets();
  }, []);
  return (
    <div>
      <h3>TicketList</h3>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Type</td>
            <td>Project</td>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.name}</td>
                <td>{ticket.description}</td>
                <td>{ticket.type}</td>
                <td>{ticket.project.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
