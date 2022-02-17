import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  )
}

const Tab = createBottomTabNavigator()
const SettingsStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// import React from 'react'
// import { Button, View, Text } from 'react-native'
// import { createStackNavigator } from 'react-navigation' // Version can be specified in package.json

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             /* 1. Navigate to the Details route with params */
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             })
//           }}
//         />
//       </View>
//     )
//   }
// }

// class DetailsScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('otherParam', 'A Nested Details Screen'),
//     }
//   }

//   render() {
//     /* 2. Get the param, provide a fallback value if not available */
//     const { navigation } = this.props
//     const itemId = navigation.getParam('itemId', 'NO-ID')
//     const otherParam = navigation.getParam('otherParam', 'some default value')

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() =>
//             this.props.navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })
//           }
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     )
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   },
// )

// export default class App extends React.Component {
//   render() {
//     return <RootStack />
//   }
// }
