import { NavLink } from 'react-router-dom';

const LogoButton = () => {
    return (
        <div className='logo-house'>
            <NavLink className='logo-icon' exact to='/'><i className="fa-brands fa-fort-awesome fa-2xl"></i></NavLink>
            <NavLink className='logo-buddy' exact to='/'>CastleBnB</NavLink>
        </div>
    )
}


export default LogoButton;
