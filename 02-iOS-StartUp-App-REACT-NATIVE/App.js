import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import LuxRentals from "./screens/LuxRentals";
import FlyScreen from "./screens/FlyScreen";
import ChauffeurScreen from "./screens/ChauffeurScreen";
import AccountsScreen from "./screens/AccountsScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
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
              name="AccountsScreen"
              component={AccountsScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="LuxRentals"
              component={LuxRentals}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="FlyScreen"
              component={FlyScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="ChauffeurScreen"
              component={ChauffeurScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
