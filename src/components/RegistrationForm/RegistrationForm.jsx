import { signUp } from 'api/api';
import React from 'react';
import { useNavigate } from 'react-router';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    const { name, email, password } = e.target.elements;
    // thunk
  };
  return (
    <form>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>Sign Up</button>
      <button>Log in</button> //navigate
    </form>
  );
};

export default RegistrationForm;
