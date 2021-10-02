import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    background: lightgrey;
    overflow: hidden;
    @media print {
      background: #FFFFFF;
    }
  }
  body {
    background: #1D1D1D;
    height: 100vh;
    overflow-y: auto;
    overflow-x: auto;
    @media print {
      background: #FFFFFF;
      height: auto;
      background-image: none;
    }
    @page {
      size: A4 portrait;
    }
    ::-webkit-scrollbar {
      width: 0.5rem;
      background: #1D1D1D;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      -webkit-border-radius: 0.7rem;
      border-radius: 0.7rem;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 0.7rem;
      border-radius: 0.7rem;
      background: #FF2A71;
    }
  }
  body, input, button, textarea {
    color: #FFFFFC;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialised;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;