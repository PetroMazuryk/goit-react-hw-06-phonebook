import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;

  .contact-enter {
    transform: translateX(-350px);
  }
  .contact-enter-active {
    transform: translateX(0px);
    transition: all 500ms ease-in;
  }
  .contact-exit {
    opacity: 1;
  }
  .contact-exit-active {
    transform: translateX(-350px);
    transition: all 500ms ease-in;
  }
`;
