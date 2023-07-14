import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { PreetyNav } from './NavItems.styled';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const NavItems = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <PreetyNav>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/phonebook'}>phonebook</NavLink>
      </li>
    </PreetyNav>
  );
};

// export default NavItems;
