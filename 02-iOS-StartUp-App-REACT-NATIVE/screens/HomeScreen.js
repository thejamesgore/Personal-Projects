import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { setDestination, setOrigin } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import Concierge from '../components/Concierge'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={tw`bg-black h-full`}>
            <TouchableOpacity 
            style={tw`bg-gray-100 rounded-full absolute z-50 left-8 p-2 shadow-lg top-12`}
            onPress={() => navigation.navigate("AccountsScreen")}
            >
                    <Icon name="menu" />
                </TouchableOpacity>
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
        dispatch(setDestination({
            location: details.geometry.location,
            description: data.description
        }))
        dispatch(setOrigin(null))
    }}
    fetchDetails={true}
    returnKeyType={'search'}
    enablePoweredByContainer={false}
    minLength={2}
    query={{
        key: GOOGLE_MAPS_APIKEY,
        language: "en",
    }}

    debounce={400}
    placeholder="Where to?"
/>
            <Concierge />
            <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})
