import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    //for logout button
    const logout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };

    let content;
    //if session user exists, display certain buttons or links
    if (sessionUser) {
    content = (
        <li>
        <ProfileButton user={sessionUser} />
        </li>
    );
    } else {
    content = (
        <li>
            <span>
                <OpenModalButton
                    buttonText="Log In"
                    modalComponent={<LoginFormModal />}
                    className='modal-nav-button'
                />
            </span>
            <span>
                <OpenModalButton
                    buttonText="Sign Up"
                    modalComponent={<SignupFormModal />}
                />
            </span>
        </li>
    );
    }

    return (
    <ul className='list-house'>
        <li>
        <NavLink exact to="/">Home</NavLink>
        </li>
        {/* navigation is wrapped above the isLoaded check in app, so have to
        pass as a prop and check here */}
        {isLoaded && content}
    </ul>
    );
}

export default Navigation;
