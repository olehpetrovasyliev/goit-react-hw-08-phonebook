import React from 'react';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    const { email, password } = e.target.elements;
    // thunk
  };
  return (
    <form>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button>Log In</button>
      <button>Sign Up</button> //navigate
    </form>
  );
};

export default LoginForm;
