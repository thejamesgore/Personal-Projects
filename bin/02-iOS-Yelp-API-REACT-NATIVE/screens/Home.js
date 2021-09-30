import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
// Components
import Categories from '../components/Categories'
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar'
import BottomTab from '../components/BottomTab'
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems'


const YELP_API_KEY =
  'ldMf4Vu7HWbty52mt4ynE9ALr02a28YAEJD-s7uXodzI6m2HflKUBXUww9GshECQmG64yf3Dbw88G7Vh5V2a0jPQQnHvaFIhKutLkDCNWUkRFbGQJUPcsvsCIdtUYXYx'


export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
    const [city, setCity] = useState('New York')
    const [activeTab, setActiveTab] = useState('Delivery')



 const getRestaurantsFromYelp = () => {
   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

   const apiOptions = {
     headers: {
       Authorization: `Bearer ${YELP_API_KEY}`,
     },
   }

   return fetch(yelpUrl, apiOptions)
     .then((res) => res.json()).then(console.log())
     .then((json) =>
       setRestaurantData(
         json.businesses.filter((business) =>
           business.transactions.includes(activeTab.toLowerCase())
         )
       )
     )
 }

useEffect(()=> {
  getRestaurantsFromYelp()
},[city])

console.log('test')

  return (
    <SafeAreaView style={{ marginTop: 15, backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  )
}
