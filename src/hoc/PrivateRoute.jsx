import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={'/'} />;
};

PrivateRoute.propTypes = { children: propTypes.node };

export default PrivateRoute;
