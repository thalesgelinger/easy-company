import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from '@react-native-material/core'
import { SwitchButton, ListForm, SelectDropDown } from '../../components'
import { FORM_OF_PAYMENT } from '../../constants'
import { Container, Title } from './styles'

export const SalesEnd = ({ navigation, route }: any) => {
  const [discount, onChangeDiscount] = useState(0)
  const [paymentInclude, setPaymentInclude] = useState('')
  const [addressInclude, setAddressInclude] = useState('')
  const [sales, setSales] = useState([])
  const fullValue = sales?.item?.reduce(
    (accumulator: number, currentItem: number) => {
      accumulator += currentItem
      return accumulator
    },
    0,
  )

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => console.log('finalizou')}
          title="Finalizar"
          color="rgb(0, 172, 74)"
        />
      ),
    })
  }, [navigation])

  useEffect(() => {
    setSales(route.params.arraySales)
    console.log(fullValue)
  }, [sales])

  return (
    <Container>
      <TextInput
        label="Endereço"
        onChangeText={setAddressInclude}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />
      <TextInput
        label="Desconto (-R$)"
        onChangeText={onChangeDiscount}
        keyboardType="numeric"
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />
      {/* <ListForm
        title="Endereço"
        onChangeText={onChangeDiscount}
        status={true}
        placeholder="Rua, numero - Bairro, Cidade - Estado, Cep"
      />
      <ListForm
        title="Desconto (-R$)"
        onChangeValue={onChangeDiscount}
        status={true}
        placeholder="-R$.."
        type="numeric"
      /> */}
      {/* <Text>Valor total: R$ {fullValue}</Text> */}
      <View>
        <Title>Pagamento:</Title>
        <SelectDropDown
          item={FORM_OF_PAYMENT}
          setItemInclude={setPaymentInclude}
        />
      </View>
    </Container>
  )
}
