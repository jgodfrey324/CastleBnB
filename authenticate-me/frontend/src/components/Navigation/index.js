import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LogoButton from './LogoButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    /* navigation is wrapped above the isLoaded check in app, so have to
    pass as a prop and check here */
    return (
        <div className='header-house'>
            <ul className='list-house'>
                {isLoaded && (
                    <li className='drop-down-content'>
                        <ProfileButton user={sessionUser} />
                    </li>
                )}
            </ul>
            <LogoButton />
        </div>
    );
}

export default Navigation;
