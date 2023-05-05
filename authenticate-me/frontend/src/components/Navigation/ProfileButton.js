import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(logout());
//   };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className='profile-button' style={{color: '#0108B3'}} onClick={() => setShowMenu(!showMenu)}>
        <i class="fa-regular fa-chess-queen fa-l"></i>
      </button>
      <ul className={ulClassName}>
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
