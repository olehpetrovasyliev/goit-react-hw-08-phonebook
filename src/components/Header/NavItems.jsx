import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
// import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const NavItems = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>
      {isLoggedIn && <NavLink to={'/phonebook'}>phonebook</NavLink>}
    </div>
  );
};

// export default NavItems;
