import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar.js';
import Home from './Components/Pages/Home.js'
import Numbers from './Components/Pages/Numbers.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Link to='/'>Home</Link>
          <Link to='/numbers'>Numbers</Link>
        </Navbar>

        <Switch>
          <Route path='/numbers'>
            <Numbers />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
