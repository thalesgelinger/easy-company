import styled from 'styled-components/native'

export const Container = styled.View`
  /* align-items: flex-end; */
`

export const View = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  padding: 5px;
  border-color: silver;
`

export const InputList = styled.TextInput`
  border-radius: 10px;
  height: 30px;
  font-size: 16px;
  width: 75%;
`
export const Preview = styled.View`
  background-color: rgb(30, 139, 77);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 5px;
  width: 100%;
  position: absolute;
  top: 55px;
`

export const ButtonPreview = styled.TouchableOpacity`
  height: 30px;
  border-top-width: 1px;
  padding: 5px;
  border-color: silver;
`

export const Title = styled.Text`
  min-width: 18%;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  margin-right: 5px;
  justify-content: center;
`
export const Text = styled.Text`
  color: white;
  font-size: 16px;
  margin-right: 10px;
`
