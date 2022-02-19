import React, { useState } from 'react'
import { PhotoUser, SearchBar } from '../../components'
import { CLIENT } from '../../constants'
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
        <NameClient>{client.name}</NameClient>
      </ButtonList>
    )
  }

  return (
    <Container>
      <SearchBar
        setResultsFound={setList}
        valueList={CLIENT}
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
