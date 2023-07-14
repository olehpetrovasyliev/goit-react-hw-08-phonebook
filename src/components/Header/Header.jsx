import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import React from 'react';
import { UserHeader } from 'components/Header/Logic/UserHeader';
import { GuestHeader } from 'components/Header/Logic/GuestHeader';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <UserHeader /> : <GuestHeader />;
};
