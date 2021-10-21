import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {!user ? <Login /> : <Profile />}
    </div>
  );
}

export default App;
