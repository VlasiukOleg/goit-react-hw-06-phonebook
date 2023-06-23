import styled from 'styled-components';
import { ImCancelCircle } from 'react-icons/im';

export const Contacts = styled.ul`
  list-style: none;
  margin-left: 0;
  padding: 0;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    outline: none;
    padding: 4px 4px;
    background-color: white;
    color: white;
  }
`;

export const IconDelete = styled(ImCancelCircle)`
  color: lightcoral;
  transition: color 200ms ease-out;

  &:hover {
    color: red;
  }
`;
