import styled from 'styled-components/native'

export const Container = styled.View`
  height: 100%;
`

export const Header = styled.View`
  align-items: center;
  background-color: rgb(0, 78, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-width: 2px;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
`

export const SalesMade = styled.View`
  align-items: center;
  background-color: rgb(0, 78, 34);
  flex-direction: row;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
`

export const SalesHistory = styled.TouchableOpacity`
  align-items: center;
  border-color: white;
  border-radius: 100px;
  border-width: 2px;
  height: 40px;
  justify-content: center;
  width: 150px;
`

export const Content = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 90%;
`

export const Title = styled.Text`
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
`

export const ButtonSales = styled.TouchableOpacity`
  align-items: center;
  border-radius: 100px;
  height: 45px;
  justify-content: center;
  width: 45px;
`

export const IconSales = styled.Image`
  height: 30px;
  width: 30px;
`
