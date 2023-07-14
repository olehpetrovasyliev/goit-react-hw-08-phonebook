import { Filter } from 'components/Filter/Filter';
import { AddContactForm } from 'components/AddForm/AddContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { getAllContacts } from 'redux/contacts/operations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { Routes, Route } from 'react-router';
import { Header } from './Header/Header';
import { HomePage } from 'pages/HomePage';

import Login from 'pages/Login';
import { Phonebook } from 'pages/Phonebook';
import { Registration } from 'pages/Registration';
import { PageNotFound } from 'pages/PageNotFound';
import { Layout } from 'pages/Layout';
import PrivateRoute from 'hoc/PrivateRoute';
import RegistrationForm from './RegistrationForm/RegistrationForm';
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
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/signup"
          element={<PublicRoute children={<Registration />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute children={<LoginForm />} />}
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
