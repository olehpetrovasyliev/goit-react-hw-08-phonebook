import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/auth/authOperatoins';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { InputField, PrettyForm, SubmitButton } from '../Form.styled';

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleChange = ({ target }) => {
    setCredentials(prev => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(credentials))
      .unwrap()
      .then(() => navigate(location.state?.from.pathname ?? '/'));

    // thunk
  };
  return (
    <PrettyForm onSubmit={handleSubmit}>
      <InputField
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <SubmitButton type="submit">Log In</SubmitButton>
      <NavLink to={'/signup'}>Sign Up</NavLink>
    </PrettyForm>
  );
};

// export default LoginForm;
