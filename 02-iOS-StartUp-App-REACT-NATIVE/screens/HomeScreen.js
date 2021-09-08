import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOLE_MAPS_APIKEY } from "@env"
import { setDestination, setOrigin } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import Concierge from '../components/Concierge'



const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-black h-full`}>
            <View style={tw`p-5`}>
                <View style={styles.logoContainer}>
                <Image
                        style={{
                            width: 100, 
                            height: 100, 
                            resizeMode: 'contain',
                        }}
                        source={require('../assets/logo.png')}
                />
                </View>
<GooglePlacesAutocomplete 
    nearbyPlacesAPI="GooglePlacesSearch"
    styles={{
        container: {
            flex: 0,
        },
        textInput: {
            fontSize: 18,
        },
        
    }}
    onPress={(data, details = null) => {
        dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
        }))
        dispatch(setDestination(null))
    }}
    fetchDetails={true}
    returnKeyType={'search'}
    enablePoweredByContainer={false}
    minLength={2}
    query={{
        key: GOOLE_MAPS_APIKEY,
        language: "en",
    }}

    debounce={400}
    placeholder="Where to?"
/>
            <Concierge
            
            />
            <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})
