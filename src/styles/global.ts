import { createGlobalStyle, keyframes } from "styled-components"

export const growUp = keyframes`
  from{
    transform: scale(0.95);
  }
  50%{
    transform: scale(1.025);
  }
  to{
    transform: scale(0.95);
  }
`

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #FFF;
    color: ${(props) => props.theme.colors.text};
    font: 400 16px RobotoCondensed, sans-serif;
    overflow-x: hidden;
  }
`
