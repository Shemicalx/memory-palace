import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar.js';
import Home from './Components/Pages/Home.js'
import Numbers from './Components/Pages/Numbers.js';
import './App.css';
import { LegendContext } from './Contexts/LegendContext.js';
import MemoryPalace from './Components/Pages/MemoryPalace.js';
import Information from './Components/Pages/Information.js';
import Saved from './Components/Pages/Saved.js';

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
            <Link to='/palace'>Memory Palace</Link>
            <Link to='/numbers'>Numbers</Link>
            <Link to='/information'>Information</Link>
            <Link to='/saved'>Saved Stories</Link>
          </Navbar>

          <Switch>
            <Route path='/numbers'>
              <Numbers />
            </Route>
            <Route path='/palace'>
              <MemoryPalace />
            </Route>
            <Route path='/information'>
              <Information />
            </Route>
            <Route path='/saved'>
              <Saved />
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
