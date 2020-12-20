import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./pages/Home";


function App() {
  return (
    <div className="container-fluid no-margin-pading">
      <Router>
        <Switch>
        <Route path="/" exact children={<Home />} />
          <Route path="/:pageName" children={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
