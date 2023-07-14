import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children, redirrectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('PublicRoute is logged in', isLoggedIn);
  return isLoggedIn ? <Navigate to={redirrectTo} /> : children;
};

PublicRoute.propTypes = { children: propTypes.node };
