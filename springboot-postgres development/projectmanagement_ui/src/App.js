import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Project from "./screens/Project";
import ProjectList from "./screens/ProjectList";
import TicketList from "./screens/TicketList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/tickets" element={<TicketList />} />
      </Routes>
    </div>
  );
}

export default App;
