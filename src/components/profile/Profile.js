import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { store } from '../app/store';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();

    dispatch(logout());
  }
  const { name, email } = store.getState().user.user;
  return (
    <div className="profile">
      <h1>
        {name}
      </h1>
      <p>{email}</p>
      <button className="logout__button" onClick={e => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Profile;