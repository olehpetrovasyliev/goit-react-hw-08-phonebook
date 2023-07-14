import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';

export const PreetyNav = styled.ul`
  display: flex;
  list-style: none;
  gap: 14px;
`;
export const PrettyNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  margin-right: 10px;
  padding: 5px;

  &.active {
    font-weight: semibold;
    color: #fff;
    border-radius: 10px;
    background-color: #007bff;
    padding: 5px 10px;
    transition-duration: 500ms;
  }
`;
