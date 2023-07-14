import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldPass = isLoggedIn && isRefreshing;
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to={'/login'} state={{ from: location }} />
  );
};

PrivateRoute.propTypes = { children: propTypes.node };

export default PrivateRoute;
