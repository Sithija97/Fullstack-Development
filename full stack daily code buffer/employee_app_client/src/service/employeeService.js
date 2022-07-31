import axios from "axios";

const EMPLOYEE_API_BASRE_URL = "http://localhost:8080/api/employees";

const getEmployees = async () => {
    let response;
    await axios.get(EMPLOYEE_API_BASRE_URL).then(data=>response=data).catch(err => console.log('Error :', err));
    return response.data;
}

const addEmployee = async (empl) => {
    await axios.post(EMPLOYEE_API_BASRE_URL, empl).then(window.alert("saved sucessfully !")).catch(err => console.log('Error :', err));
}

const getEmployeeById = async(id) => {
    let response;
    await axios.get(EMPLOYEE_API_BASRE_URL+`/${id}`).then(data=>response=data).catch(err => console.log('Error :', err));
    return response.data;
}

const deleteEmployee = async(id) => {
    await axios.delete(EMPLOYEE_API_BASRE_URL+`/delete/${id}`)
}

const updateEmployee = async(empl,id) => {
    await axios.put(EMPLOYEE_API_BASRE_URL+`/${id}`, empl).then(window.alert("updated sucessfully !")).catch(err => console.log('Error :', err));
}

const EmployeeService = { getEmployees, addEmployee, deleteEmployee, getEmployeeById, updateEmployee }
export default EmployeeService;