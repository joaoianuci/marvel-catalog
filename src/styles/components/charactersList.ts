import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 2.5%;
  width: 100%;
  min-height: 640px;
  column-gap: 10px;
  row-gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 960px) {
    grid-template-columns: 0.5fr;
  }

`
