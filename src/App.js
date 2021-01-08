import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/NaviBar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import AddDeal from "./components/Pages/AddDeal";

function App() {
  return (
    <div className="App">
        <Router>
            <NaviBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/addDeal" component={AddDeal}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
