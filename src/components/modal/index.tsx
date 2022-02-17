import React, { useState } from 'react'
import { Alert, Modal } from 'react-native'
import {
  Container,
  ModalView,
  ButtonOpen,
  ButtonClose,
  TextStyle,
  ModalText,
} from './styles'

export const Modall = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}>
        <Container>
          <ModalView>
            <ModalText>Hello World!</ModalText>
            <ButtonClose onPress={() => setModalVisible(!modalVisible)}>
              <TextStyle>Hide Modal</TextStyle>
            </ButtonClose>
          </ModalView>
        </Container>
      </Modal>
      <ButtonOpen onPress={() => setModalVisible(true)}>
        <TextStyle>Show Modal</TextStyle>
      </ButtonOpen>
    </Container>
  )
}
