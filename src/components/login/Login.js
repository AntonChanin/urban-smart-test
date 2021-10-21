import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { store } from '../app/store';
import './Login.css';

const Login = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { name, email, password, loggedIn: true } });

  }
  store.subscribe(() => props.history.push('/profile'));

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const canBeSubmitted = () => {
    return name.length && email.length > 0 && password.length > 0;
  }
  const isEnabled = canBeSubmitted();

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="submit__btn" disabled={!isEnabled}>
          SUBMIT
        </button>
      </form>
    </div >
  )
}

export default withRouter(Login);