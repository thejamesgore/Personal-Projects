import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core"
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler"
import { Icon } from "react-native-elements";


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate("HomeScreen")}
          style={[tw`absolute top-4 left-5 z-50 p-1 bg-white rounded-full`]}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
      </View>
      <Text style={tw`text-center p-5 text-sm text-white`}>
        Select your starting point
      </Text>

      <View style={tw`flex-shrink pt-2`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where are you?"
            styles={toInputBoxStyles}
            styles={{
              container: {
                  flex: 0,
                  paddingLeft: 20,
                  paddingRight: 20,
              },
              textInput: {
                  fontSize: 18,
              },
              
          }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("ChauffeurSelection");
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

