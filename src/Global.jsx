import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
  
    box-sizing: border-box;
    outline: none;
  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-size: 2.4rem;
    background-color: #fff;
  }
  
  body,
  input,
  textarea,
  button {
    font-family: 'Inter', sans-serif;
  }
  
  button, a {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`