import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`

  :root {
    --eclipse: #3b3b3b;
    --dodger-blue: #1797ff;
    --gray-84: #d6d6d6;
    --gray-99: #fcfcfc;
    --whisper: #ececec;
    --white: #ffffff;
    --whiteSmoke: #F5F5F5;
    --zambezi: #606060;

    --font-baskervville: 'Baskervville';
    --font-roboto: 'Roboto';

    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  [data-theme="dark"] {
    --eclipse: #3b3b3b;
    --dodger-blue: #1797ff;
    --gray-84: #606060;
    --gray-99: #202020;     
    --whisper: #2c2c2c;     
    --white: #3b3b3b;       
    --whiteSmoke: #333533;  
    --zambezi: #ececec;    
  }

  html {
    color: var(--zambezi);
    font-family:var(--font-roboto);
    background-color: var(--big-stone);
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: ${({ theme }) => theme.lineHeight.md};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scrollbar-width: thin;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: inherit;
    line-height: inherit;
    margin: 0;
    text-rendering: optimizeLegibility;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: var(--white);
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--gray-84);
    border-radius: 6px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray-84);
  }
  *::-webkit-scrollbar-thumb:active {
    background-color: var(--zambezi);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    display:  inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${({ theme }) => theme.transition};
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    background-color: inherit;
    padding: 0;
  }

  img {
    border-style: none;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;      
    }
  }
`

export default globalStyles
