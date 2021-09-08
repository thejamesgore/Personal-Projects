import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env"

const Map = () => {
  const destination = useSelector(selectDestination);
  const origin = useSelector(selectOrigin)
  const mapRef = useRef(null)

  useEffect(() => {
    if(!origin || !destination ) return

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
    })
  },[origin, destination])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      // provider="google"

      initialRegion={{
        latitude: destination.location.lat,
        longitude: destination.location.lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {destination && origin && (
        <MapViewDirections 
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      )}

{destination?.location && (
  <Marker
    coordinate={{
      latitude: destination.location.lat,
      longitude: destination.location.lng,
    }}
    title="Destination"
    description={destination.description}
    identifier="destination"
  />
)}

{origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
