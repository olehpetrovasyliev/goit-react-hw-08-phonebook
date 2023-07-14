import React from 'react';
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
