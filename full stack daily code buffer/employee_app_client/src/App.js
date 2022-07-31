
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';
import Header from './components/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path='/' element={<EmployeeList />}></Route>
          <Route path='/employeeList' element={<EmployeeList />}></Route>
          <Route path='/addEmployee' element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
