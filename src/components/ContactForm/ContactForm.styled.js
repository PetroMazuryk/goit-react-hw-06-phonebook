import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 18px;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 22px;
`;

export const InputForm = styled.input`
  width: 240px;

  font-size: 16px;
  padding: 8px;
  box-shadow: -5px -5px 9px #fff inset, 2px 2px 18px -10px #000 inset;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  display: block;
  text-align: center;

  padding: 8px 12px;
  border-radius: 10px;
  box-shadow: -6px -6px 9px #fff, 11px 11px 21px -8px #000;

  :hover {
    color: ${props => props.theme.colors.green};
    transform: scale(1.1) translateY(-4px);
  }
`;
