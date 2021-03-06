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
import { selectDestination } from "../slices/navSlice"

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
  const destination = useSelector(selectDestination)

  return (
    <View style={tw`${!destination && "opacity-20"}`}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          disabled={!destination}
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

          <Text style={tw`${destination && "mt-2 text-lg font-semibold text-black"} ${!destination && "text-white"}`}>{item.title}</Text>
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
