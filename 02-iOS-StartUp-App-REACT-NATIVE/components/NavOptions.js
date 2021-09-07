import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/core'

const data = [
    {
        id: "123",
        title: "Lux Rentals",
        image: "https://user-images.githubusercontent.com/83005220/132331888-db68c76a-5d6d-4c8a-b979-44508bd6eed1.png",
        screen: "MapScreen2",
    },
    {
        id: "456",
        title: "Fly Private",
        image: "https://user-images.githubusercontent.com/83005220/132332553-85d2470d-b278-4ea6-be4c-30a545f8a88a.png",
        screen: "FlyScreen",
    },
]

const NavOptions = () => {
const navigation = useNavigation()

    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={ ( {item} ) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}

                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-400 m-2 w-40`}
                >

                    <Image
                        style={{
                            width: 100, 
                            height: 100, 
                            resizeMode: 'contain',
                        }}
                        source={{
                            uri: item.image
                        }}
                        />

                        <Text style={tw`mt-2 text-lg font-semibold `}>{item.title}</Text>

                        <Icon 
                            type='antdesign'
                            color='white'
                            name='arrowright'
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        />

                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions