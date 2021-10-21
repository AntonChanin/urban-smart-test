import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { store } from './components/app/store';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

function App() {
  const user = store.subscribe(() => store.getState()?.user);

  return (

    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            {user && <Route path="/profile" component={Profile} />}
            <Redirect to="/" />
          </Switch>
        </div>  </Provider>
    </BrowserRouter>

  );
}

export default App;
