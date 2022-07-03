import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTutorial from "./components/add-tutorial";
import NavbarComponent from "./components/navbar.component";
import TutorialsList from "./components/tutorial-list.component";
import Tutorial from "./components/tutorial.component";

function App() {
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList />} />
          <Route path="/tutorials" element={<TutorialsList />} />
          <Route path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
