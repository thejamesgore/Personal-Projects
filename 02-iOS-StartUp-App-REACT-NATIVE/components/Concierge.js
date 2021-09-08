import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux"
import { selectOrigin } from "../slices/navSlice"

const data = [
  {
    id: "123",
    title: "Chauffeur Services",
    image:
      "https://user-images.githubusercontent.com/83005220/132363035-0b696ef3-a58a-4de3-aee9-06ac8a610d2f.png",
    screen: "ChauffeurScreen",
  },
];

const Concierge = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin)

  return (
    <View style={tw`${!origin && "opacity-20"}`}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-400 m-2`}
        >
          <Image
            style={{
              width: 100,
              height: 50,
              resizeMode: "contain",
            }}
            source={{
              uri: item.image,
            }}
          />

          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
      </View>
  );
};

export default Concierge;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
