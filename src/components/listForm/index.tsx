import React from 'react'
import { Container, Text, TextInput } from './styles'

//TODO: retirar os any e por a prop correta
interface ListPros {
  title: string
  status: boolean
  value: string | any
  type?: string | any
}

export const ListForm = ({ title, status, value, type }: ListPros) => {
  return (
    <Container>
      <Text>{title}: </Text>
      <TextInput
        editable={status}
        placeholder={value}
        placeholderTextColor={'#ffffff9d'}
        keyboardType={type}
      />
    </Container>
  )
}
