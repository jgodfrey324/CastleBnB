import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  //add event listener if showMenu is true, register to document, remove listener before running again
  useEffect(() => {
    //if showMenu false, we don't want any of this business (mostly on initial load)
    if (!showMenu) return;

    const closeMenu = (e) => {
      setShowMenu(false);
    };
    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    //listen for when showMenu changes
  }, [showMenu]);

  //opens profile menu on button click
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(logout());
//   };

  //sets class name for hidden menu functionality
  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className='profile-button' style={{color: '#0108B3'}} onClick={openMenu}>
        <i className="fa-regular fa-chess-queen fa-l"></i>
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
