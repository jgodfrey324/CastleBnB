import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    //redirects if a session is found
    if (sessionUser) return <Redirect to="/" />;

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
      return dispatch(login({ credential, password })).catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
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
          <label className="box-label">
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
      </div>
    );
  }

export default LoginFormPage;
