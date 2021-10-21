import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { store } from '../app/store';
import './Profile.css';

const Profile = (props) => {
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT', payload: null });
  }
  store.subscribe(() => props.history.push('/'));

  const { name, email, avatar } = store.getState().user;
  return (
    <div className="profile">
      <h1>User profile</h1>
      <button className="profile__avatar">
        <img alt="" src={avatar} />
      </button>
      <h1>
        {name}
      </h1>
      <div className="profile__email">
        <div>User email:</div><div>{email}</div>
      </div>
      <button className="profile__logout-button" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  )
}

export default withRouter(Profile);