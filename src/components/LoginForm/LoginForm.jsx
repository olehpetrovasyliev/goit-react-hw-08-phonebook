import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { login } from 'redux/auth/authOperatoins';
import { InputField, PrettyForm, SubmitButton } from '../Form/Form.styled';

export const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setCredentials(prev => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(credentials));
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
