import React from 'react';
import { NavLink } from 'react-router-dom';
import { PreetyNav } from './NavItems.styled';
export const NavItems = () => {
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
