import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput } from '@react-native-material/core'
import {
  Container,
  View,
  Title,
  InputList,
  Preview,
  ButtonPreview,
  Text,
} from './styles'

interface InputDropDownPros {
  title: string
  setItemInclude?: any
  valueList: string[]
}

export const InputDropDown = ({
  title,
  valueList,
  setItemInclude,
}: InputDropDownPros) => {
  const [searchText, setSearchText] = useState('')
  const [resultsFound, setResultsFound] = useState<string[]>()
  const [selectedProduct, setSelectedProduct] = useState(false)

  useEffect(() => {
    if (searchText === '') {
      const newList = [...valueList]

      newList.sort((itemA, itemB) =>
        itemA > itemB ? 1 : itemB > itemA ? -1 : 0,
      )
      setResultsFound(newList)
    } else {
      setResultsFound(
        valueList.filter(
          item => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1,
        ),
      )
    }
  }, [searchText, selectedProduct])

  return (
    <Container style={{ zIndex: 10 }}>
      <TextInput
        label="Cliente"
        onChangeText={t => setSearchText(t)}
        value={searchText}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />

      {searchText !== '' && (
        <Preview style={{ zIndex: 20 }}>
          {resultsFound?.map(name => (
            <ButtonPreview
              onPress={() => {
                setSelectedProduct(!selectedProduct)
                setItemInclude(name)
                setSearchText(name)
                // navigation.navigate('Detalhes', { functionaryGroup })
              }}>
              <Text> {name}</Text>
            </ButtonPreview>
          ))}
        </Preview>
      )}
    </Container>
  )
}
