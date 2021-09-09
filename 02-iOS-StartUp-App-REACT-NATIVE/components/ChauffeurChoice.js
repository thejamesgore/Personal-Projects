import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const ChauffeurChoice = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const setTravelTimeInformation = useSelector(selectTravelTimeInformation);

  const drivers = [
    {
      id: "Driver1",
      title: "Agent 47",
      multiplier: 1,
      image:
        "https://user-images.githubusercontent.com/83005220/132680184-9dd467cd-0a6f-4926-b61c-545014e3dd45.png",
      rating: 4.7,
    },
    {
      id: "Driver2",
      title: "Agent Smith",
      multiplier: 1.6,
      image:
        "https://user-images.githubusercontent.com/83005220/132680389-2affe869-b3f5-4903-819a-9aeae384f257.png",
        rating: 4.8,
    },
    {
      id: "Driver3",
      title: "Agent Carter",
      multiplier: 1.3,
      image:
        "https://user-images.githubusercontent.com/83005220/132681604-23e6888b-4cf4-4b45-a921-b33b5228ebf0.png",
        rating: 4.6,
    },
  ];

  return (
    <SafeAreaView style={tw`bg-black flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={[tw`absolute top-4 left-5 z-50 p-1 bg-white rounded-full`]}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>

        <Text style={tw`p-4 -mr-4 text-white text-lg text-center`}>
          Select a Chauffeur
        </Text>
      </View>

      <FlatList
        data={drivers}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image, rating }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-2 pr-3
            ${id === selected?.id && "bg-gray-900"}`}
          >
            <Image
              style={{
                width: 100,
                height: 80,
                resizeMode: "contain",
                padding: "10px",
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-white font-semibold`}>{title}</Text>
              <Text style={tw`text-white text-sm`}>
                {Math.trunc(
                  (925 * multiplier) / 64
                )}{" "}
                Mins Wait Time
              </Text>
            </View>
            <View >
              <Text style={tw`text-sm text-white`}>{rating} ★ Rating </Text>
             
            </View>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-white py-3 m-3 rounded-full ${
            !selected && "bg-gray-900"
          }`}
          onPress={() => navigation.navigate("CarChoice")}
        >
          <Text
          
            style={tw`text-black text-center text-xl font-semibold ${
              !selected && "text-white"
            } `}
          >
            {!selected && "Select a Chauffeur"} {selected && "Choose"}{" "}
            {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChauffeurChoice;

const styles = StyleSheet.create({});
