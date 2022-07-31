import axios from "axios";

const EMPLOYEE_API_BASRE_URL = "http://localhost:8080/api/employees";

const getEmployees = async () => {
    let response;
    await axios.get(EMPLOYEE_API_BASRE_URL).then(data=>response=data).catch(err => console.log('Error :', err));
    console.log('response :',response.data)
    return response.data;
}

const addEmployee = async (empl) => {
    await axios.post(EMPLOYEE_API_BASRE_URL, empl).then(window.alert("saved sucessfully !")).catch(err => console.log('Error :', err));
}

const EmployeeService = { getEmployees, addEmployee }
export default EmployeeService;