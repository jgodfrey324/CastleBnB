import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from '../../context/Modal';
import DemoUser from './DemoUser';
import "./LoginForm.css";

const LoginFormModal = () => {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();

    //disables button for incomplete forms
    const disabled = (credential, password) => credential.length >= 4 && password.length >= 6 ? false : true;

    //return val of disabled func
    const disabledFuncReturn = disabled(credential, password);

    //set additional class name for buttons that are disabled
    const buttonClassFunc = (disabledFuncReturn) => {
      let buttonClass;
      if (disabledFuncReturn) buttonClass = 'nice-button hover-off';
      else buttonClass = 'nice-button'
      return buttonClass;
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors({});
      return dispatch(login({ credential, password }))
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    };

    return (
      <div className="login-house">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label className="box-label">
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="box-label" id='password'>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.credential && <p className="display-errors">{errors.credential}</p>}
          <button type="submit" disabled={disabledFuncReturn} className={buttonClassFunc(disabledFuncReturn)}>Log In</button>
        </form>
        <DemoUser />
      </div>
    );
  }

export default LoginFormModal;
