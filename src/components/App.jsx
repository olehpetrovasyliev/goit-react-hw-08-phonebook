import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/HomePage';
import { Phonebook } from 'pages/Phonebook';
import { Registration } from 'pages/Registration';
import { PageNotFound } from 'pages/PageNotFound';
import { Layout } from 'components/Layout';
import PrivateRoute from 'hoc/PrivateRoute';
import { LoginForm } from './LoginForm/LoginForm';
import { PublicRoute } from 'hoc/PublicRoute';
import { refresh } from 'redux/auth/authOperatoins';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Loading</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <PublicRoute
              children={<Registration />}
              redirrectTo={'/phonebook'}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute children={<LoginForm />} redirrectTo={'/phonebook'} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirrectTo={'/login'}>
              <Phonebook />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
