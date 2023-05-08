import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from '../../context/Modal';
import { signup } from "../../store/session";
import "./SignupForm.css";

const SignupFormModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  //disable buttton if form not filled
  const disabled = (email, username, firstName, lastName, password, confirmPassword) => {
    if (!email || !username || !firstName || !lastName || !password || !confirmPassword) return true;
    if (username.length < 4 || password.length < 6) return true;
    return false;
  }

  //return val of disabled func
  const disabledFuncReturn = disabled(email, username, firstName, lastName, password, confirmPassword);

  //set additional class name for buttons that are disabled
  const buttonClassFunc = (disabledFuncReturn) => {
    let buttonClass;
    if (disabledFuncReturn) buttonClass = 'nice-button hover-off';
    else buttonClass = 'nice-button'
    return buttonClass;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <div className="signup-house">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label className="box-label">
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p className="display-errors">{errors.email}</p>}
        <label className="box-label">
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && <p className="display-errors">{errors.username}</p>}
        <label className="box-label">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && <p className="display-errors">{errors.firstName}</p>}
        <label className="box-label">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && <p className="display-errors">{errors.lastName}</p>}
        <label className="box-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p className="display-errors">{errors.password}</p>}
        <label className="box-label">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && <p className="display-errors">{errors.confirmPassword}</p>}
        <button type="submit" disabled={disabledFuncReturn} className={buttonClassFunc(disabledFuncReturn)}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
