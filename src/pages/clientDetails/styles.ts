import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  background-color: white;
  height: 100%;
`

export const UserInformation = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;
`

export const ContainerPhoto = styled.View`
  align-items: center;
  width: 20%;
`

export const InfoText = styled.View`
  background-color: rgb(57, 70, 78);
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  border-width: 1px;
  padding: 10px;
  width: 80%;
`

export const FlatList = styled.FlatList`
  width: 95%;
`

export const VehicleItems = styled.View`
  background-color: rgb(57, 70, 78);
  border-radius: 15px;
  border-width: 1px;
  margin-bottom: 5px;
  padding: 5px;
`

export const AddVehicle = styled.View`
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  border-width: 1px;
  font-size: 20px;
  height: 10px;
  margin: 5px 16px;
  padding: 5px;
`
