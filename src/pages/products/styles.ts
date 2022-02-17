import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-vertical: 10px;
`

export const Card = styled.View`
  background-color: black;
  border-radius: 15px;
  height: 550px;
  margin-horizontal: 5px;
  width: 300px;
`

export const ImageView = styled.View`
  background-color: white;
  border-radius: 15px;
  height: 400px;
  margin-bottom: 25px;
  margin-horizontal: 10px;
  width: 280px;
`

export const TitleProduct = styled.Text`
  align-items: center;
  color: white;
  font-size: 24px;
`

export const Title = styled.Text`
  align-items: center;
  color: white;
`
