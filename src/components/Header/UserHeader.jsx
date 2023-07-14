import React from 'react';
import { NavItems } from './NavItems/NavItems';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperatoins';
import { LogoutBtn, PrettyHeader } from './Header.styled';
import { styled } from 'styled-components';

export const UserHeader = () => {
  const user = useSelector(selectUser);
  const { email } = user;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  const StyledInfo = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
  `;
  return (
    <PrettyHeader>
      <NavItems />
      <StyledInfo>
        <p> {email}</p>
        <LogoutBtn type="button" onClick={handleClick}>
          Log out
        </LogoutBtn>
      </StyledInfo>
    </PrettyHeader>
  );
};
