import { MouseEventHandler } from "react"
import {
  Container,
  BottomTriangle,
  CharHeader,
  CharBody,
  CharLine,
  CharName
} from "../styles/components/characterItem"
interface Character {
  id: number
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  description: string
}

interface Props {
  char: Character
  maxHeight: number
  onClick?: MouseEventHandler<HTMLDivElement>
}

const CharacterItem: React.FC<Props> = ({ char, maxHeight, onClick }) => {
  return (
    <Container maxHeight={maxHeight} onClick={onClick} key={char.id}>
      <CharHeader
        imgUrl={`${char.thumbnail.path}.${char.thumbnail.extension}`}
      />
      <CharLine />
      <CharBody>
        <CharName>{char.name}</CharName>
        <p>{char.description}</p>
      </CharBody>
      <BottomTriangle className="triangle" />
    </Container>
  )
}

export default CharacterItem
