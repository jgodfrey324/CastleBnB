import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context/Modal';
import { login } from '../../store/session';

const DemoUser = () => {
const dispatch = useDispatch();
const { closeModal } = useModal();

const handleClick = () => {
    const credential = 'sherlock-holmes';
    const password = 'password1';

    return dispatch(login({ credential, password }))
        .then(closeModal)
}

    return (
        <NavLink exact to='/' className="demo-user-link" onClick={handleClick}>Demo User</NavLink>
    )
}

export default DemoUser;
