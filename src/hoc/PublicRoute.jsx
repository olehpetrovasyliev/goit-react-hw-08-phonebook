import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={'/'} /> : children;
};

PublicRoute.propTypes = { children: propTypes.node };
