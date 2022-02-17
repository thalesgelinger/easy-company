import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Router } from './src/router'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Router />
        <StatusBar />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
