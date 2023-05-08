import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { login } from '../../store/session';

const DemoUser = () => {
const dispatch = useDispatch();
const { closeModal } = useModal();

const handleClick = () => {
    const credential = 'Demo-lition';
    const password = 'password';

    return dispatch(login({ credential, password }))
        .then(closeModal)
}

    return (
        <NavLink exact to='/' className="demo-user-link" onClick={handleClick}>Demo User</NavLink>
    )
}

export default DemoUser;
