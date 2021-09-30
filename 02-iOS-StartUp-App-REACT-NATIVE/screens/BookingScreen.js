import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

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
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1874173.jpg&f=1&nofb=1',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
]

const BookingScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <ScrollView style={{backgroundColor: "black", padding:15}}>
        <RestaurantImage />
        <RestaurantInfo />
      </ScrollView>
    </SafeAreaView>
  )
}

const RestaurantImage = (props) => (
  <Image
    source={{
      uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1874173.jpg&f=1&nofb=1',
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
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: "white" }}>Wagamama</Text>
      <Text style={{ fontSize: 13, color: 'grey' }}>30-45 • min</Text>
    </View>
    <View style={{flexDirection: "row", alignItems:"center"}}>
    <Text style={{color: "white", paddingRight: 5}}>Rating:</Text>
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
      <Text>4.5</Text>
        </View>
    </View>
  </View>
)

export default BookingScreen

const styles = StyleSheet.create({})
