import { NavLink } from 'react-router-dom';

const LogoButton = () => {
    return (
        <div className='logo-house'>
            <NavLink className='logo-icon' exact to='/'><i className="fa-brands fa-fort-awesome fa-2xl"></i></NavLink>
            <NavLink className='logo-buddy' exact to='/'>CastleBnB</NavLink>
        </div>
    )

//     const history = useHistory();

//     return (
//         <div className='logo-house'
//             onClick={history.push('/')}>
//             <div className='logo-icon'><i className="fa-brands fa-fort-awesome fa-2xl"></i></div>
//             <p className='logo-buddy'>CastleBnB</p>
//         </div>
//     )
}


export default LogoButton;
