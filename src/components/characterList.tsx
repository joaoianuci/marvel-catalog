import { useFetch } from "../hooks/useFetch"
import { useRouter } from "next/router"

import { Container } from "../styles/components/charactersList"
import CharacterItem from "./characterItem"

interface Character {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface Response {
  data: {
    results: Character[]
  }
}

interface Props {
  offset: number
}
const CharactersList: React.FC<Props> = ({ offset }) => {
  const route = useRouter()
  const { data, isValidating } = useFetch<Response>(
    `/characters?offset=${offset}`,
    {
      limit: 12,
      orderBy: "-modified"
    }
  )
  if (isValidating) return <h1 id="loading-text">Eles já estão chegando...</h1>

  function handleClickOnCharacter(id: number) {
    console.log(id);
    route.push(`/characters/${id}`)
  }

  return (
    <Container>
      {data?.data.results.map((char) => (
        <CharacterItem
          onClick={() => handleClickOnCharacter(char.id)}
          maxHeight={50}
          char={char}
        />
      ))}
    </Container>
  )
}

export default CharactersList
