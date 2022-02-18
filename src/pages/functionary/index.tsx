import React, { useState } from 'react'
import { SearchBar } from '../../components'
import { FUNCTIONARY_GROUP } from '../../constants'
import {
  Container,
  Title,
  FlatList,
  ButtonList,
  NameFunctionary,
} from './styles'

export const Functionary = ({ navigation }: any) => {
  const [list, setList] = useState({})

  const buttonItem = ({ item: functionaryGroup }: any) => {
    return (
      <ButtonList
        onPress={() => {
          // navigation.navigate('Detalhes', { functionaryGroup })
        }}>
        <NameFunctionary>{functionaryGroup.name}</NameFunctionary>
      </ButtonList>
    )
  }

  return (
    <Container>
      <SearchBar
        setResultsFound={setList}
        valueList={FUNCTIONARY_GROUP}
        icon="plus"
        title="Pesquise um grupo"
      />

      <FlatList
        data={FUNCTIONARY_GROUP}
        renderItem={buttonItem}
        keyExtractor={item => item.id}
      />
      {/* isso sao o menus */}
      <Title>Funcionários!</Title>
      <Title>-diarista</Title>
      <Title>-cortadores</Title>
      <Title>-cortador por diaria</Title>
      <Title>-add valores pago ao funcionario</Title>
      <Title>-operador de maquinaaaaaaaaaaaaaaaaaaaaaaaa</Title>
      <Title>-motoristaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Title>
    </Container>
  )
}
