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

    if (sessionUser) return <Redirect to="/" />;

    const disabled = (credential, password) => {
      if (credential < 4 || password < 6) return true;
      return false;
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
          <button type="submit" disabled={disabled(credential, password)} className="nice-button">Log In</button>
        </form>
      </div>
    );
  }

export default LoginFormPage;
