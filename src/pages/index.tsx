import { Container, Header, Main } from "../styles/pages/characters"
import { useState } from "react"
import CharactersList from "../components/characterList"
import { generateRandint } from "../utils/generateRandint"

const characters: React.FC = () => {
  const [offset, setOffSet] = useState<number>(generateRandint(1260, 0))
  return (
    <Container>
      <div>
        <Header imgUrl="characters_comics.jpg">
          <h1>PERSONAGENS MARVEL</h1>
        </Header>
      </div>
      <Main>
        <div>
          <h1
            onClick={() => {
              setOffSet(generateRandint(1260, 0))
              console.log(offset)
            }}
          >
            +Personagens
          </h1>
          <CharactersList offset={offset} />
        </div>
      </Main>
    </Container>
  )
}

export default characters
