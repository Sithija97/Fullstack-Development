import axios from "axios";
const baseUrl = "http://localhost:8080/api";

const getAllTickets = async () => {
  const response = await axios.get(`${baseUrl}/tickets`);
  console.log('response.data :',response.data);
  return response.data;
};

const addTicket = async (ticket) => {
  await axios.post(`${baseUrl}/tickets`,ticket)
}

const TicketService = {
  getAllTickets,
  addTicket
};

export default TicketService;
