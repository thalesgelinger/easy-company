import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, ClientDetails } from '../pages'

export const HomeRouter = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen name="Detalhes" component={ClientDetails} />
    </Navigator>
  )
}
