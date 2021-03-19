import styled from "styled-components"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { growUp } from "../global"

interface HeroProps {
  imgUrl: string
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div:first-child {
    background-color: #151515;
  }
`

export const Header = styled.div<HeroProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 350px;
  min-height: 350px;
  background-image: url(${(props) => props.imgUrl});
  background-color: #151515;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: soft-light;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
  h1 {
    font-size: 76px;
    font-family: "Bebas Neue", cursive;
    color: ${(props) => props.theme.colors.text};
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 700px;
  margin-top: 20px;
  div:first-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  h1 {
    width: fit-content;
    cursor: pointer;
    font-size: 72px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    color: #000;
    padding: 5px 10px;
    text-transform: uppercase;
    text-decoration: none;
    animation: ${growUp} 1.3s infinite;
    transform: skew(-90deg);
  }
  h1:hover {
    transition: 0.3s ease-in;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
    color: ${(props) => props.theme.colors.primary};
  }

  h1#loading-text {
    cursor: default;
    font-size: 36px;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    color: ${(props) => props.theme.colors.primary};
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    margin-top: 40px;
  }
`
export const Navigator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NextArrow = styled(FaArrowRight)``
