import React, { useState } from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons'
import {
  Client,
  ClientDetails,
  Functionary,
  Home,
  Products,
  Provider,
} from './pages'

const { Navigator, Screen } = createBottomTabNavigator()
const SettingsStack = createNativeStackNavigator()

export const Router = () => {
  const [edit, setEdit] = useState(false)

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgb(19,20,24)',
          borderTopColor: 'transparent',
        },
        headerStyle: {
          backgroundColor: 'rgb(20,20,20)',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: 'rgb(0, 172, 74)',
        tabBarInactiveTintColor: '#777',
      })}>
      <Screen
        name="Funcionários"
        component={Functionary}
        options={{
          tabBarIcon: ({ color, size }: any) => {
            return <Entypo name="v-card" size={size} color={color} />
          },
          tabBarBadge: 5,
        }}
      />
      <Screen
        name="Clientes"
        options={{
          tabBarIcon: ({ color, size }: any) => {
            return <Feather name="users" size={size} color={color} />
          },
        }}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="Clientes" component={Client} />
            <SettingsStack.Screen
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
          </SettingsStack.Navigator>
        )}
      </Screen>
      <Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarLabel: '',
          tabBarIcon: ({ size }: any) => (
            <View>
              <LinearGradient
                style={styles.iconTabRound}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={['rgb(0, 172, 74)', 'rgb(0, 102, 4)']}>
                <AntDesign name="home" size={size} color="#FFF" />
              </LinearGradient>
            </View>
          ),
        })}
      />
      <Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ color, size }: any) => {
            return <Feather name="package" size={size} color={color} />
          },
        }}
      />
      <Screen
        name="Fornecedor"
        component={Provider}
        options={{
          tabBarIcon: ({ color, size }: any) => {
            return <Feather name="truck" size={size} color={color} />
          },
        }}
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
