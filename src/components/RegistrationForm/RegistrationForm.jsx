import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/authOperatoins';
import { InputField, PrettyForm, SubmitButton } from '../Form/Form.styled';

const RegistrationForm = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    setCredentials(prev => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // const { name, email, password } = e.target.elements;
    dispatch(register(credentials));
  };
  return (
    <div>
      <PrettyForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChange}
        />
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
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <NavLink to={'/login'}>Log in</NavLink>
      </PrettyForm>
    </div>
  );
};

export default RegistrationForm;
