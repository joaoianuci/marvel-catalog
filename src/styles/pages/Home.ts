import styled, { keyframes } from "styled-components"
import { growUp } from "../global"

interface HeroProps {
  imgUrl: string
}

const fade = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const Container = styled.div<HeroProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${(props) => props.imgUrl});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.925);
  border-radius: 30px;
  border: ridge 10px #cccccc;
  animation: ${fade} 0.5s ease-in;

  h1 {
    font-size: 56px;
    font-family: "Bebas Neue", cursive;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 5px 10px;
    text-transform: uppercase;
    width: 80%;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 40px;
  width: 50%;
  a {
    cursor: pointer;
    font-size: 46px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    animation: ${growUp} 1.3s infinite;
    transform: skew(-90deg);
  }
  a:hover {
    transition: 0.3s ease-in;
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.text};
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
  }
`
