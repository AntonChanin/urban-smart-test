import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../features/userSlice';
import { store } from '../app/store';
import './Profile.css';

const Profile = (props) => {
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    props.history.push('/return-to-login');
  }
  const { name, email } = store.getState().user.user;
  return (
    <div className="profile">
      <h1>
        {name}
      </h1>
      <p>{email}</p>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Profile);