import styled from "styled-components"

interface HeroProps {
  imgUrl: string
}

interface CardProps {
  maxHeight: number
}

export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: 300px;
  max-height: ${(props) => props.maxHeight}vh;
  &:hover {
    div:first-child {
      transform: scale(1.05);
      margin-bottom: 4px;
    }
    div:nth-child(3) {
      background-color: #e62429;
    }
    div:last-child {
      border-left-color: #e62429;
    }
  }
`

export const CharHeader = styled.div<HeroProps>`
  width: 100%;
  height: 177px;
  background-image: url(${(props) => props.imgUrl});
  background-color: #151515;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.2s ease-in;

  @media (max-width: 960px) {
    height: 800px;
  }
`

export const CharLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #e62429;
  @media (max-width: 960px) {
    height: 5px;
  }
`

export const CharBody = styled.div`
  display: flex;
  padding: 10px 10px;
  flex-direction: column;
  justify-content: start;
  background-color: #151515;
  width: 100%;
  height: 120px;
  position: relative;
  transition: 0.2s ease-in;
  overflow-y: scroll;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 16px;
    font-family: "Bebas Neue", cursive;
    color: #fff;
    text-transform: uppercase;
    margin-top: 10px;
  }

  @media (max-width: 960px) {
    height: 400px;
  }
`

export const CharName = styled.span`
  font-size: 26px;
  font-family: "Bebas Neue", cursive;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`
export const BottomTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 12px solid #fff;
  border-left: 12px solid #151515;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: transparent;
  transition: 0.2s ease-in;
`
