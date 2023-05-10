import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  //grab ref of the <ul> that the maps to the vDOM
  const ulRef = useRef();

  //add event listener if showMenu is true, register to document, remove listener before running again
  useEffect(() => {
    //if showMenu false, we don't want any of this business (mostly on initial load)
    if (!showMenu) return;

    const closeMenu = (e) => {
      //only closing menu if click is outside current ref
      if (!ulRef.current.contains(e.target)) setShowMenu(false);
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

  const closeMenu = () => setShowMenu(false);

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  // };

  //sets class name for hidden menu functionality
  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <button className='profile-button' style={{color: '#010466'}} onClick={openMenu}>
        <i className="fa-regular fa-chess-queen fa-xl"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="drop-down-user-info">
              <li className='dropdown-user-greeting'>Hello, {user.firstName}</li>
              <li className='dropdown-user-greeting'>{user.email}</li>
            </div>
            <li id='manage-spots-link'>
              <NavLink to='/spots/current'>Manage Spots</NavLink>
            </li>
            <li>
              <button className="logout-button" onClick={(e) => {
                e.preventDefault();
                dispatch(logout());
                }}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <OpenModalButton
                buttonText="Log In"
                onButtonClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </li>
            <li>
              <OpenModalButton
                buttonText="Sign Up"
                onButtonClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
