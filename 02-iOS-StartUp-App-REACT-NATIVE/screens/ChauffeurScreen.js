import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import CarChoice from "../components/CarChoice";
import ChauffeurChoice from "../components/ChauffeurChoice";

const ChauffeurScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2 `}>
        <Map />
      </View>

      <View style={tw`h-1/2 `}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ChauffeurChoice"
            component={ChauffeurChoice}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CarChoice"
            component={CarChoice}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default ChauffeurScreen;

const styles = StyleSheet.create({});
