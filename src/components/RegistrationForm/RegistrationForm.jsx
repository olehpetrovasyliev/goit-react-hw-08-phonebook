import { signUp } from 'api/api';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/authOperatoins';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    setCredentials(prev => ({ ...prev, [target.name]: target.value }));
    console.log(credentials);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(register(credentials))
      .unwrap()
      .then(() => navigate('/phonebook'));
    console.log(credentials);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
        <NavLink to={'/login'}>Log in</NavLink>
      </form>
    </div>
  );
};

export default RegistrationForm;
