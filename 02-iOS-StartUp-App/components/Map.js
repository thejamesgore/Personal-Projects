import { useSelector } from 'react-redux' 
import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import {
    selectDestination,
    selectOrigin,
    setTravelTimeInformation,
  } from "../slices/navSlice";


const Map = () => {
    // const origin = useSelector(selectOrigin)

    return (
        <MapView 
            mapType="mutedStandard"
            style={tw`flex-1`}
            initialRegion={{
                latitude: 51.509865,
                longitude: -0.118092,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        />
    )
}

export default Map

// const styles = StyleSheet.create({})
``