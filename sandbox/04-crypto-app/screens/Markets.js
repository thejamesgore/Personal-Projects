import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ListItem from '../components/ListItem'
import { cryptoData } from '../assets/data/sampleData'
import { getMarketData } from '../services/cryptoService'


const Markets = () => {
const [data, setData] = useState([])

useEffect(()=>{

  const fetchMarketData = async () => {
    const marketData = await getMarketData()
    setData(marketData)
    console.log(marketData)
  }

  fetchMarketData()

},[])

  return (
    <View style={styles.container}>
      <View style={styles.h1_wrapper}>
        <Text style={styles.h1}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <ScrollView>
        <ListItem cryptoData={data} />
      </ScrollView>
    </View>
  )
}

export default Markets

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  h1_wrapper: {
    marginTop: 60,
    paddingHorizontal: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#a9abb1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  modal: {
    flex: 1,
  },
})
