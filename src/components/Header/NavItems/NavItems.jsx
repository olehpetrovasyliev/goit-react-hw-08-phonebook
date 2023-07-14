import React from 'react';
import { PreetyNav, PrettyNavLink } from './NavItems.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
export const NavItems = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <PreetyNav>
      <li>
        <PrettyNavLink to={'/'}>Home</PrettyNavLink>
      </li>
      {isLoggedIn && (
        <li>
          <PrettyNavLink to={'/phonebook'}>phonebook</PrettyNavLink>
        </li>
      )}
    </PreetyNav>
  );
};

// export default NavItems;
