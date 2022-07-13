import axios from "axios";
const baseUrl = "http://localhost:8080/api";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/projects`);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/projects/` + id);
  return response.data;
};

const ProjectService = {
  getAll,
  getById,
};

export default ProjectService;
