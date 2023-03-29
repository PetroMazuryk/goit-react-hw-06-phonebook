import styled from 'styled-components';

export const FilterInput = styled.input`
  width: 200px;
  height: 36px;
  font-size: 16px;
  padding: 8px;
  margin-right: 14px;
  box-shadow: -5px -5px 9px #fff inset, 2px 2px 18px -10px #000 inset;
`;

export const FilterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 20px 0px 0px 95px;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;

  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;

  :hover {
    transform: scale(1.1) translateY(-4px);
    color: ${props => props.theme.colors.tomato};
  }
`;
