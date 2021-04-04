import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar.js';
import Home from './Components/Pages/Home.js'
import Numbers from './Components/Pages/Numbers.js';
import './App.css';
import { LegendContext } from './Contexts/LegendContext.js';

function App() {
  
  const [ legend, setLegend ] = useState({
    0: 's',
    1: 'l',
    2: 'b',
    3: 'g',
    4: 'd',
    5: 'c',
    6: 'n',
    7: 'r',
    8: 'm',
    9: 'p',
  });

  return (
    <Router>
      <div className="App">
        <LegendContext.Provider value={{legend, setLegend}}>
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
        </LegendContext.Provider>
      </div>
    </Router>
  );
}

export default App;
