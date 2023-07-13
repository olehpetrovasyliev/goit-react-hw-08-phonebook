import React from 'react';
import { NavItems } from './NavItems';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperatoins';

export const UserHeader = () => {
  const user = useSelector(selectUser);
  const { name } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <header>
      <NavItems />
      <h2>hello, {name}</h2>
      <button onClick={handleClick}>Log out</button>
    </header>
  );
};
