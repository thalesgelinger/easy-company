import React, { useState } from 'react'
import { SearchBar, DropDownItens } from '../../components'
import { FUNCTIONARY_GROUP } from '../../constants'
import { Container, FlatList } from './styles'

export const Functionary = ({ navigation }: any) => {
  const [list, setList] = useState({})

  const buttonItem = ({ item: functionaryGroup }: any) => {
    return <DropDownItens functionaryGroup={functionaryGroup} />
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
        data={list}
        renderItem={buttonItem}
        keyExtractor={item => item.id}
      />
      {/* isso sao o menus */}
      {/* <Title>Funcionários!</Title>
      <Title>-diarista</Title>
      <Title>-cortadores</Title>
      <Title>-cortador por diaria</Title>
      <Title>-add valores pago ao funcionario</Title>
      <Title>-operador de maquinaaaaaaaaaaaaaaaaaaaaaaaa</Title>
      <Title>-motoristaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Title> */}
    </Container>
  )
}
