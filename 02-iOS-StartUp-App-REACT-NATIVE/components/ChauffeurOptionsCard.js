import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core"
import { useSelector } from "react-redux"
import { selectTravelTimeInformation } from "../slices/navSlice"







const ChauffeurOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const setTravelTimeInformation = useSelector(selectTravelTimeInformation)

    const data = [
        {
          id: "Rolls",
          title: "Rolls Royce Phantom",
          multiplier: 4.5,
          image: "https://user-images.githubusercontent.com/83005220/132592706-48daae3d-8683-4bcd-8d7a-def6ca74df99.png",
        },
        {
            id: "RollsPhantom",
            title: "Phantom Convertible",
            multiplier: 7,
            image: "https://user-images.githubusercontent.com/83005220/132593942-e369758e-cd11-4bdd-bb11-d06585df3aff.png",
        },
        {
          id: "RollsPhantomStretch",
          title: "Phantom Stretch Limo",
          multiplier: 9,
          image: "https://user-images.githubusercontent.com/83005220/132593452-7cd9fe58-63d6-41cd-bccb-9776b94fc4f6.png",
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

          <Text style={tw`p-4 -mr-6 text-white text-lg text-center`}>
            Travel distance of {setTravelTimeInformation?.distance.text}
          </Text>
      </View>

    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image}, item }) => (
            <TouchableOpacity
            onPress={() => setSelected(item) }
            style={tw`flex-row items-center justify-between px-2
            ${id === selected?.id && "bg-gray-900"}`}
            >
                <Image 
                    style={{
                        width: 100,
                        height: 80,
                        resizeMode: "contain",
                    }}
                    source={{ uri: image }}

                />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-white font-semibold`}>{title}</Text>
                    <Text style={tw`text-white text-sm`}>{setTravelTimeInformation?.duration.text} Travel Time</Text>
                </View>
                <Text style={tw`text-xl text-white`}>
                    
{new Intl.NumberFormat('en-gb', {
    style: 'currency',
    currency: 'GBP'
}).format(

    (setTravelTimeInformation?.duration.value * multiplier) / 100

)}

                </Text>
            </TouchableOpacity>
        )}
    />

    <View>
        <TouchableOpacity disabled={!selected} style={tw`bg-white py-3 m-3 rounded-full ${!selected && "bg-gray-900" }`}>
            <Text style={tw`text-black text-center text-xl font-semibold ${!selected && "text-white"} `}>{!selected && "Select a car"} {selected && "Choose"} { selected?.title}</Text>
        </TouchableOpacity>
    </View>
        
    </SafeAreaView>
  );
};

export default ChauffeurOptionsCard;

const styles = StyleSheet.create({});
