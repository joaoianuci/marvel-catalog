import styled from "styled-components"
import Image from "next/image"

interface HeaderProps {
  imgUrl: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;

  & > div:first-child {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const Header = styled.div<HeaderProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
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
`

export const CharacterHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2.5%;
`

export const Name = styled.span`
  font-size: 52px;
  font-family: "Bebas Neue", cursive;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`

export const Description = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-family: "Roboto Condensed", cursive;
  color: #fff;
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  & > div:first-child {
    width: 30%;
    > div:nth-child(1) {
      height: 550px;
    }
    > div:nth-child(2) {
      height: 5px;
    }
    > div:nth-child(3) {
      height: 300px;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    & > div:first-child {
      width: 80%;
    }
  }
`

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 500px;
  padding: 0 30px;

  @media (max-width: 960px) {
    display: none;
  }
`

export const CharName = styled.span`
  font-size: 72px;
  font-family: "Bebas Neue", cursive;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`

export const CharBio = styled.span`
  font-size: 36px;
  font-family: "Bebas Neue", cursive;
  color: #000;
  text-transform: uppercase;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`

export const Back = styled.span`
  cursor: pointer;
  font-size: 36px;
  padding: 2.5px 5px;
  font-family: "Bebas Neue", cursive;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: 0.2s ease-in;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primary};
  }
`
