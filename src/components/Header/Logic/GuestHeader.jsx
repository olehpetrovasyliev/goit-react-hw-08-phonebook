import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItems } from '../NavItems/NavItems';

export const GuestHeader = () => {
  return (
    <header>
      <NavItems />
      <p>please log in or sign up to continue</p>
      <NavLink to={'/signup'}>Sign Up</NavLink>
      <NavLink to={'/login'}>Log In</NavLink>
    </header>
  );
};
