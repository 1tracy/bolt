import React, { useState, useEffect } from "react";
import './App.css';
import Nav from './Nav';
import Calendar from './Calendar';
import Plant from './Plant';
import Settings from './Settings';
import TodoMain from './TodoMain';
import Awards from './Awards';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/plant" component={Plant} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/settings" component={Settings} />
          <Route path="/todo" component={TodoMain} />
          <Route path="/awards" component={Awards} />
          <Route path="/" exact component={Home} />
          
        </Switch>
      </Router>




    </div>
  );
}

const Home = () => (
  <div>
    <div className='title'>
      <h1>Incrementum</h1>
      <div className='slogan'>
        <p>Stimulating growth one task at a time.</p>
      </div>
    </div>
    <nav>
      <Link to='/todo' style={{ textDecoration: 'none' }}>
        <button className="btn-begin">Begin</button>
      </Link>
    </nav>

  </div>
);
export default App;
