import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import ProjectList from "./screens/projectList";
import TicketList from "./screens/ticketList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<ProjectList />} />
          <Route path="/" element={<ProjectList />}></Route>
          <Route path="/projectList" element={<ProjectList />}></Route>
          <Route path="/ticketList" element={<TicketList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
