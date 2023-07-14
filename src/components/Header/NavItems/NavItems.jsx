import React from 'react';
import { NavLink } from 'react-router-dom';
import { PreetyNav, PrettyNavLink } from './NavItems.styled';
export const NavItems = () => {
  return (
    <PreetyNav>
      <li>
        <PrettyNavLink to={'/'}>Home</PrettyNavLink>
      </li>
      <li>
        <PrettyNavLink to={'/phonebook'}>phonebook</PrettyNavLink>
      </li>
    </PreetyNav>
  );
};

// export default NavItems;
