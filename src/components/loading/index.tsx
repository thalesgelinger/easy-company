import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container } from './styles'

export const Loading = () => {
  return (
    <Container>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </Container>
  )
}
