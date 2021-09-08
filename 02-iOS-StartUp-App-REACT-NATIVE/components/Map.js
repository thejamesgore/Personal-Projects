import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);

  return (
    <MapView
      style={tw`flex-1`}
      provider="google"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          identifier="origin"
          description={origin.description}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
