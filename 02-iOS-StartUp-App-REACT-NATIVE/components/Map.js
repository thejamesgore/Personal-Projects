import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectDestination } from "../slices/navSlice";

const Map = () => {
  const destination = useSelector(selectDestination);

  return (
    <MapView
      style={tw`flex-1`}
      provider="google"
      initialRegion={{
        latitude: destination.location.lat,
        longitude: destination.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          identifier="origin(Should be destination, change later)"
          description={destination.description}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
