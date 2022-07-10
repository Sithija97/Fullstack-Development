import axios from "axios";
const baseUrl = "http://localhost:8080/api";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/tickets`);
  return response.data;
};

const TicketService = {
  getAll,
};

export default TicketService;
