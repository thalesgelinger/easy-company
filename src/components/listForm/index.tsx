import React from 'react'
import { Container, Text, TextInput } from './styles'

//TODO: retirar os any e por a prop correta
interface ListPros {
  title: string
  onChangeValue?: any
  status: boolean
  placeholder: string | any
  type?: string | any
}

export const ListForm = ({
  title,
  onChangeValue,
  status,
  placeholder,
  type,
}: ListPros) => { //TODO: if you want to get all types included on TextInput you could make your interface extends TextInputProps
  return (
    <Container>
      <Text>{title}: </Text>
      <TextInput
        onChangeText={onChangeValue}
        editable={status}
        placeholder={placeholder}
        placeholderTextColor={`${status ? '#807c7c6e' : 'black'}`}
        keyboardType={type}
      />
    </Container>
  )
}
