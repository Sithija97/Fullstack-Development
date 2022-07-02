import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
