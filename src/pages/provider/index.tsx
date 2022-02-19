import React, { useState } from 'react'
import { SelectDropDown } from '../../components'
import { CLIENT, PRODUCTS } from '../../constants'
import {
  Container,
  View,
  Title,
  NameItem,
  QuantiItem,
  ValueItem,
} from './styles'

export const Provider = () => {
  const [selectedItem, setSelectedItem] = useState('')
  const TYPE_SERVICES = ['Draga', 'Pedreira', 'Saibreira', 'Terraplanagem']
  const UNIDADE_DE_MEDIDA = ['Metros', 'Horas', 'Unidade']
  const FORMA_DE_PAGAMENTO = [
    'Dinheiro',
    'Cartão crédito',
    'Cheque',
    'Pix',
    'Tranferencia',
  ]
  let clientName = []
  CLIENT.map(item => clientName.push(item.name))
  const product = PRODUCTS.filter(products => products.name === selectedItem)

  return (
    <Container>
      <NameItem placeholder="Titulo" placeholderTextColor="black" />
      <View>
        <Title>Cliente:</Title>
        <SelectDropDown item={clientName} />
      </View>
      <View>
        <Title>Tipo de serviço:</Title>
        <SelectDropDown
          item={TYPE_SERVICES}
          setSelectedItem={setSelectedItem}
        />
      </View>
      {selectedItem != '' && (
        <View>
          <Title>Tipo de produto:</Title>
          <SelectDropDown item={product[0].products} />
        </View>
      )}
      <View>
        <Title>Quant.:</Title>
        <QuantiItem
          // placeholder="Quant"
          placeholderTextColor="black"
          keyboardType="numeric"
        />
        <SelectDropDown
          item={UNIDADE_DE_MEDIDA}
          setSelectedItem={setSelectedItem}
        />
      </View>
      <View>
        <Title>Valor unitário:</Title>
        <ValueItem
          placeholder="R$.."
          placeholderTextColor="black"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Title>Pagamento:</Title>
        <SelectDropDown item={FORMA_DE_PAGAMENTO} />
      </View>
      <Title>Total: $10,00</Title>
    </Container>
  )
}
