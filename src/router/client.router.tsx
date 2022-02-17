import React, { useState } from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Client, ClientDetails } from '../pages'

export const ClientRouter = () => {
  const [edit, setEdit] = useState(false)
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen name="Clientes" component={Client} />
      <Screen
        name="Detalhes"
        component={ClientDetails}
        options={() => ({
          headerRight: () => (
            <Button
              onPress={() => setEdit(!edit)}
              title="editar"
              color={edit ? 'rgb(0, 172, 74)' : 'rgb(139, 139, 139)'}
            />
          ),
        })}
      />
    </Navigator>
  )
}
