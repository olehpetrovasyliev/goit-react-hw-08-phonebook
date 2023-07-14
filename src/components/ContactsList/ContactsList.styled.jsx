import { styled } from 'styled-components';

export const ContactsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px 24px;
  list-style: none;
  padding: 10px;
`;
export const StyledContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
export const DelBtnStyled = styled.button`
  background-color: #ff5555;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
// 1
