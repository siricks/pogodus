import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }
  a {
    color: ${({theme}) => theme.text};
  }
  
  .header-main {
    background-color: ${({theme}) => theme.header};
  }
  
  .root__container {
    background: ${({theme}) => theme.root_bg};
  }
  
  .weather__card {
    background: ${({theme}) => theme.card_bg};
  }
  
  .add__card {
   background: ${({theme}) => theme.add_card};
    color: ${({theme}) => theme.text};
  }
  
`;
