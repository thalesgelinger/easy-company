import React, { useState } from 'react'
import { PhotoUser, SearchBar } from '../../components'
import { COSTOMER } from '../../constants'
import { Container, FlatList, ButtonList, NameClient } from './styles'

export const Client = ({ navigation }: any) => {
  const [list, setList] = useState({})

  const buttonItem = ({ item: client }: any) => {
    return (
      <ButtonList
        onPress={() => {
          navigation.navigate('Detalhes', { client })
        }}>
        <PhotoUser iten="" />
        <NameClient>{client.nome}</NameClient>
      </ButtonList>
    )
  }

  return (
    <Container>
      <SearchBar
        setResultsFound={setList}
        valueList={COSTOMER}
        icon="adduser"
        title="Pesquise um cliente"
      />
      <FlatList
        data={list}
        renderItem={buttonItem}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}
