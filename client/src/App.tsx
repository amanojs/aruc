import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import Noti from './pages/Noti'

function App() {
  return (
    <div className="App">
      <a href="/noti">通知画面</a>
      <a href="/">探す</a>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <UserList />
          </Route>
          <Route path="/noti" exact={true}>
            <Noti />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
