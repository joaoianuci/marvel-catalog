import React from "react"
import CharacterItem from "../../components/characterItem"
import { useRouter } from "next/router"
import { useFetch } from "../../hooks/useFetch"

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

import {
  Container,
  Header,
  CharacterHeader,
  Name,
  Description,
  Main,
  CharacterInfo,
  CharName,
  CharBio,
  Footer,
  Back
} from "../../styles/pages/characters[id]"
import Link from "next/link"

const character: React.FC = () => {
  const route = useRouter()
  const { data, isValidating } = useFetch<Response>(
    `/characters/${route.query.id}`
  )
  if (isValidating) return <h1>Carregando dados...</h1>
  return (
    <Container>
      <div>
        <Header
          imgUrl={`${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`}
        >
          <CharacterHeader>
            <Name>{data?.data.results[0].name}</Name>
            <Description>{data?.data.results[0].description}</Description>
          </CharacterHeader>
        </Header>
      </div>
      <Main>
        <CharacterItem
          onClick={() => {}}
          maxHeight={100}
          char={data?.data.results[0]}
        />
        <CharacterInfo>
          <CharName> {data?.data.results[0].name}</CharName>
          <CharBio>{data?.data.results[0].description}</CharBio>
        </CharacterInfo>
      </Main>
      <Footer>
        <Link href="/">
          <Back>Voltar para encontrar novos personagens?</Back>
        </Link>
      </Footer>
    </Container>
  )
}

export default character
