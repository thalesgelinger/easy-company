import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Container, Photo } from './styles'

interface PhotoUserPros {
  iten: any
}

export const PhotoUser = ({ iten }: PhotoUserPros) => {
  return (
    <Container>
      {iten ? (
        <Photo source={iten} />
      ) : (
        <Feather name="user" size={28} color="#eee2e2" />
      )}
    </Container>
  )
}
