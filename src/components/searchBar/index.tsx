import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Container, TextInput, OrderButton } from './styles'

//TODO: retirar os any e por a prop correta
interface SearchBarPros {
  setResultsFound: (a: object[]) => void
  valueList: { name: string }[]
  icon?: any
  title: string
}

export const SearchBar = ({
  setResultsFound,
  valueList,
  icon,
  title,
}: SearchBarPros) => {
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (searchText === '') {
      const newList = [...valueList]

      newList.sort((itemA, itemB) =>
        itemA.name > itemB.name ? 1 : itemB.name > itemA.name ? -1 : 0,
      )
      setResultsFound(newList)
    } else {
      setResultsFound(
        valueList.filter(
          item =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
        ),
      )
    }
  }, [searchText])

  function handleOrderClick() {}

  return (
    <Container>
      <TextInput
        placeholder={title}
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={t => setSearchText(t)}
      />
      {icon && (
        <OrderButton onPress={handleOrderClick}>
          <AntDesign name={icon} size={28} color="#FFF" />
        </OrderButton>
      )}
    </Container>
  )
}
