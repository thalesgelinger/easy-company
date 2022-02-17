import React from 'react'
import { ButtonOn, Text } from './styles'

interface ButtonPros {
  title: string
  setChangeState: (status: boolean) => void
  status: boolean
}

export const ButtonOnclick = ({
  title,
  setChangeState,
  status,
}: ButtonPros) => {
  return (
    <ButtonOn
      onPress={() => {
        setChangeState(!status)
      }}>
      <Text>{title}</Text>
    </ButtonOn>
  )
}
