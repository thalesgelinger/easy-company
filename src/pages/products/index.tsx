import * as React from 'react'
import { FlatList, Button, View } from 'react-native'

import { Container, TitleProduct, ImageView, Title, Card } from './styles'

export const Products = () => {
  return (
    <Container>
      <Button title="<" />
      <Card>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <TitleProduct>Nome Produto</TitleProduct>
        </View>

        <ImageView>
          <Title>imagem</Title>
        </ImageView>
        <View style={{ marginHorizontal: 10 }}>
          <Title>Altura:</Title>
          <Title>Largura:</Title>
          <Title>Tipo:</Title>
          <Title>Preço:</Title>
        </View>
      </Card>
      <Button title=">" />
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      /> */}
    </Container>
  )
}

{
  /* <Text>Produtos!</Text>
<Text>-pedras</Text>
<Text>-tijoletas</Text>
<Text>-laje</Text>
<Text>-areia</Text>
<Text>-brita</Text>
<Text>-retro</Text>
<Text>-bobcat</Text> */
}
