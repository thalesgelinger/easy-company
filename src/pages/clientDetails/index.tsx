import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { PhotoUser, ListForm } from '../../components'
import {
  Container,
  UserInformation,
  ContainerPhoto,
  InfoText,
  FlatList,
  VehicleItems,
  AddVehicle,
} from './styles'

// colocar e tela com històrico de venda do cliente exibir
// anexo de vale, ter observaçoes

export const ClientDetails = ({ route }: any) => {
  const [edit, setEdit] = useState(false)
  const [client, setClient] = useState({})

  useEffect(() => {
    setClient(route.params.client)
  })

  const ClientVehicles = ({ item: vehicles }: any) =>
    vehicles && (
      <VehicleItems>
        <ListForm title="Motorista" status={edit} value={vehicles.motorista} />
        <ListForm title="Placa" status={edit} value={vehicles.placa} />
        <ListForm title="Município" status={edit} value={vehicles.municipio} />
        <ListForm
          title="Peso bruto"
          status={edit}
          value={vehicles.pesoBruto}
          type="numeric"
        />
        <ListForm
          title="Peso liquido"
          status={edit}
          value={vehicles.pesoLiquido}
          type="numeric"
        />
      </VehicleItems>
    )

  return (
    <Container>
      <UserInformation>
        <ContainerPhoto>
          <PhotoUser iten="" />
        </ContainerPhoto>
        <InfoText>
          <ListForm title="Nome" status={edit} value={client.nome} />
          <ListForm
            title="Data de Nascimento"
            status={edit}
            value={client.dataNascimento}
            type="numeric"
          />
          <ListForm
            title="Celular"
            status={edit}
            value={client.celular}
            type="numeric"
          />
          <ListForm title="Email" status={edit} value={client.email} />
          <ListForm title="Endereço" status={edit} value={client.endereço} />
        </InfoText>
      </UserInformation>

      <FlatList
        data={client.veiculos}
        renderItem={ClientVehicles}
        keyExtractor={item => item.id}
      />
    </Container>
  )
}
