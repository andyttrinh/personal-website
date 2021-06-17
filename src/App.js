import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
