import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home></Home>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
