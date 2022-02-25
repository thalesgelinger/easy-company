import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { TextInput } from '@react-native-material/core'
import {
  SelectDropDown,
  ButtonOnclick,
  ListForm,
  InputDropDown,
  Modall,
  ItemProduct,
} from '../../components'
import { CLIENT, PRODUCTS, UNIT_OF_MEASUREMENT } from '../../constants'
import { Container, View, TitleValue, ViewADD } from './styles'

export const Sales = ({ navigation }: any) => {
  const [addItems, setAddItems] = useState(true)
  const [enableNextPage, setEnableNextPage] = useState(true)
  const [clientInclude, setClientInclude] = useState('')
  const [productInclude, setProductInclude] = useState('')
  const [medidaInclude, setMedidaInclude] = useState('')
  const [quantity, onChangeQuantity] = useState(0)
  const [value, setChangeValue] = useState(0)
  const [listAddedProducts, setListAddedProducts] = useState<any[]>([])
  const totalItemValue = Number(quantity * value)
  const clientName = []
  CLIENT.map(item => clientName.push(item.name))

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          disabled={enableNextPage}
          onPress={() => {
            const arraySales = {
              cleint: clientInclude,
              item: listAddedProducts,
            }

            navigation.navigate('Final da venda', { arraySales })
          }}
          title="Próximo"
          color="rgb(0, 172, 74)"
        />
      ),
    })
  }, [navigation, listAddedProducts])

  useEffect(() => {}, [listAddedProducts])

  const additem = () => {
    const item = {
      product: productInclude,
      quantity: quantity,
      medida: medidaInclude,
      value: totalItemValue,
    }
    setEnableNextPage(false)
    setListAddedProducts([item, ...listAddedProducts])
  }

  return (
    <Container>
      <InputDropDown
        title="cliente"
        valueList={clientName}
        setItemInclude={setClientInclude}
      />
      <TextInput
        label="Cliente"
        onChangeText={setClientInclude}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />
      <TextInput
        label="Produto"
        onChangeText={setProductInclude}
        color="rgb(0, 172, 74)"
        selectionColor="rgb(0, 172, 74)"
      />
      <View>
        <TextInput
          label="Quantidade"
          onChangeText={onChangeQuantity}
          keyboardType="numeric"
          color="rgb(0, 172, 74)"
          selectionColor="rgb(0, 172, 74)"
          style={{ width: 160 }}
        />
        <SelectDropDown
          item={UNIT_OF_MEASUREMENT}
          setItemInclude={setMedidaInclude}
        />
      </View>
      <View>
        <TextInput
          label="Valor unitário (R$)"
          onChangeText={setChangeValue}
          keyboardType="numeric"
          color="rgb(0, 172, 74)"
          selectionColor="rgb(0, 172, 74)"
          style={{ width: 160 }}
        />
        <TitleValue style={{ width: 160 }}>
          Total Item: $ {totalItemValue}
        </TitleValue>
      </View>
      <ViewADD>
        <ButtonOnclick
          title=" + ADD ITEM"
          setChangeState={setAddItems}
          status={addItems}
          functionValue={additem}
        />
      </ViewADD>

      {/* {addItems && (
        <Modall setModalVisible={setAddItems} modalVisible={addItems} />
      )} */}
      <ItemProduct listAddedProducts={listAddedProducts} />
    </Container>
  )
}
