import React from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children, redirrectTo }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldPass = isLoggedIn && !isRefreshing;
  const location = useLocation();

  return shouldPass ? (
    children
  ) : (
    <Navigate to={redirrectTo} state={{ from: location }} />
  );
};

PrivateRoute.propTypes = { children: propTypes.node };

export default PrivateRoute;
