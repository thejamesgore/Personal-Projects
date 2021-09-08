import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core"
import { useDispatch } from "react-redux";


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-black flex-1`}>
      <Text style={tw`text-center pt-5 text-sm text-white`}>
        We couldn't find your current location.
      </Text>
      <Text style={tw`text-center pb-5 text-sm text-white`}>Please enter below.</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where are you?"
            styles={toInputBoxStyles}
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
              navigation.navigate("ChauffeurOptionsCard");
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

