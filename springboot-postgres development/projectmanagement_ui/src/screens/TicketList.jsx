import React, { useEffect, useState } from "react";
import Ticket from "./ticket";
import TicketService from "../services/TicketService";
import AddModal from "../components/addTicketsModal";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const loadAllTickets = () => {
    setLoading(true);
    try {
      TicketService.getAllTickets()
        .then((data) => setTickets(data))
        .catch((e) => console.log("Error: ", e));
    } catch (error) {
      console.log("error :", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAllTickets();
  }, []);
  return (
    <div className="container mx-auto my-8">
      <div className="px-10">
        <div className="h-12">
          <button className="rounded bg-blue-500 text-white px-6 py-2 font-semibold" onClick={() => setOpen(true)}>
            Add Ticket
          </button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Description
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Type
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Project
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              tickets.map((ticket) => (
                <tbody className="bg-white" key={ticket.id}>
                  <Ticket ticket={ticket} />
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
      <AddModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default TicketList;
