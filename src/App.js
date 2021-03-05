import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ReactTemplate from './pages/ReactTemplate/ReactTemplate';
import Home from './pages/Home/home';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Side-panel">
        <NavigationBar />
      </div>
      <Router>
        <div className="Main-body">
          <Route path="/template">
            <ReactTemplate />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
