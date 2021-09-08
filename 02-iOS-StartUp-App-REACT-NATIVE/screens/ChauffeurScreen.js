import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const ChauffeurScreen = () => {
  return (
    <View style={tw`h-1/2 `}>
      <Map />
    </View>
  );
};

export default ChauffeurScreen;

const styles = StyleSheet.create({});
