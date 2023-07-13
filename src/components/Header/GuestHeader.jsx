import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItems } from './NavItems';

export const GuestHeader = () => {
  return (
    <header>
      <NavItems />
      <h2>please log in or sign up to continue</h2>
      <NavLink to={'/signup'}>Sign Up</NavLink>
      <NavLink to={'/login'}>Log In</NavLink>
    </header>
  );
};
