import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { selectDestination } from '../slices/navSlice'

const data = [
  {
    id: 'STQ',
    title: 'Book A Table',
    image:
      'https://user-images.githubusercontent.com/83005220/135133468-cf5823c7-e71c-49bb-8f13-a55ac5b7ab3c.png',
    screen: 'BookingScreen',
  },
]

const TableService = () => {
  const navigation = useNavigation()
  const destination = useSelector(selectDestination)

  return (
    <View style={tw`${!destination && 'opacity-20'}`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-400 m-2`}
          >
            <Image
              style={{
                width: 100,
                height: 50,
                resizeMode: 'contain',
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tw`${'mt-2 text-lg font-semibold text-black'} `}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TableService

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
})
