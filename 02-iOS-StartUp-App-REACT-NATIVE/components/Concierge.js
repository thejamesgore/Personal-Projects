import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/core'

const data = [
    {
        id: "123",
        title: "Chauffeur Services",
        image: "https://user-images.githubusercontent.com/83005220/132363035-0b696ef3-a58a-4de3-aee9-06ac8a610d2f.png",
        screen: "ChauffeurScreen",
    },
]

const Concierge = () => {
    const navigation = useNavigation()

    
    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={ ( {item} ) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}

                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-400 m-2`}
                >

                    <Image
                        style={{
                            width: 100, 
                            height: 50, 
                            resizeMode: 'strech',
                        }}
                        source={{
                            uri: item.image
                        }}
                        />

                        <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>


                </TouchableOpacity>
            )}
        />
    )
}

export default Concierge

const styles = StyleSheet.create({
    text: {
        color: "white",
      },
})
