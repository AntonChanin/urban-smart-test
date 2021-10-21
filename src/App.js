import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {user && <Route path="/profile" component={Profile} />}
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
