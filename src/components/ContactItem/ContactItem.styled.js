import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid grey;
  border-radius: 10px;

  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Text = styled.p`
  width: 140px;
`;

export const Button = styled.button`
  width: 36px;
  padding: 2px 10px;
  border-radius: 8px;

  margin: 0;
  :hover {
    background-color: #ebbcd1;
    color: red;
  }
`;
