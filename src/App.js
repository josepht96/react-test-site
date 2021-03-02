import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/home'
import About from './pages/about'
import React from './pages/reactbasic'
import './App.css';

const isActive = {
  fontWeight: "bold",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

function App() {
  return (
    <div className="App">
      <Router>
        <div className="SidePanel">
          <NavBar />
        </div>
        <div className="MainBody">
          <Switch>
            <Route path='/x' component={Home} />
            <Route path='/asbout' component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
