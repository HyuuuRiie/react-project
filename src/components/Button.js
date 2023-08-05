import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  border-radius: 10px;
  background: transparent;
  color: var(--mainWhite);
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`;
