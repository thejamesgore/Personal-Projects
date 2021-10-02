import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
//
//Screens
import HomeScreen from './screens/HomeScreen'
import Markets from './screens/Markets'
import Crypto from './screens/Crypto'
//
// React Redux



export default function App() {
const Stack = createStackNavigator()

  return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Markets"
              component={Markets}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Crypto"
              component={Crypto}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
