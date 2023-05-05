import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(logout());
//   };

  return (
    <>
      <button className='profile-button' style={{color: '#0108B3'}}>
      <i class="fa-regular fa-chess-queen fa-2xl"></i>
      </button>
      <ul className="profile-dropdown">
        <li>{user.username}</li>
        <li>{user.firstName} {user.lastName}</li>
        <li>{user.email}</li>
        <li>
          <button className='logout-button' onClick={(e) => {
            e.preventDefault();
            dispatch(logout());
          }}>Log Out</button>
        </li>
      </ul>
    </>
  );
}

export default ProfileButton;
