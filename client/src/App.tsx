import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <UserList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
