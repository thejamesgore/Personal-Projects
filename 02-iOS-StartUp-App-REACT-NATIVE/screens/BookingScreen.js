import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { YELP_API_KEY } from '@env'
import { selectDestination } from '../slices/navSlice'

// model data used to see if will map over screen successfully in same format as response from yelp API
export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1874173.jpg&f=1&nofb=1',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fawscloudfront.kempinski.com%2F2646%2Fslider_isttugrarestaurantinteriorl.jpg%3Bwidth%3D1024%3Bheight%3D576%3Bmode%3Dcrop%3Banchor%3Dmiddlecenter%3Bautorotate%3Dtrue%3Bquality%3D90%3Bscale%3Dboth%3Bprogressive%3Dtrue%3Bencoder%3Dfreeimage&f=1&nofb=1',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: 'Wagamama',
    image_url:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FFuaWRnINcF_S4J_lOvbZFzvAE10%3D%2F0x0%3A2000x1333%2F1200x0%2Ffilters%3Afocal(0x0%3A2000x1333)%3Ano_upscale()%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F7482771%2F30710240330_bc1c0d2fce_o__1_.jpg&f=1&nofb=1',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
]

const BookingScreen = () => {
  const [restaurantData, setRestaurantData] = useState([])
  const destination = useSelector(selectDestination)

  const getRestaurants = () => {
    const YELP_ENDPOINT = `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${destination.location.lat}&longitude=${destination.location.lng}`

    const options = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(YELP_ENDPOINT, options)
      .then((res) => res.json())
      .then(console.log())
      .then((json) => setRestaurantData(json.businesses))
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: 'black', padding: 15 }}>
        {restaurantData.map((restaurant, index) => (
          <TouchableOpacity key={index} style={{ paddingBottom: 10 }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const RestaurantImage = (props) => (
  <Image
    source={{
      uri: props.image,
    }}
    style={{ width: '100%', height: 180 }}
  />
)

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>
        {props.name}
      </Text>
      <Text style={{ fontSize: 13, color: 'grey' }}>30-45 • min</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: 'white', paddingRight: 5 }}>Rating:</Text>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  </View>
)

export default BookingScreen

const styles = StyleSheet.create({})
