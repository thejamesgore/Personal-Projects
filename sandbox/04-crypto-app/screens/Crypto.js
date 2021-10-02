import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import { cryptoData } from '../assets/data/sampleData'
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts'

export const { width: SIZE } = Dimensions.get('window')

export const data = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
]

export const formatUSD = (value) => {
  'worklet'
  if (value === '') {
    return `$${cryptoData[0].current_price.toLocaleString('en-US', {
      currency: 'USD',
    })}`
  }

  const formattedValue = `$${parseFloat(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

  return formattedValue
}

const points = monotoneCubicInterpolation({ data, range: 80 })

const Crypto = () => {
 const isCurrency = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2,
 })

    return (
      <View style={styles.container}>
        <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
          <View style={styles.h1_wrapper}>
            <Image
              source={{
                uri: cryptoData[0].image,
              }}
              style={styles.image}
            />
            <View>
              <Text style={styles.h1}>{cryptoData[0].name}</Text>
              <ChartYLabel format={formatUSD} style={styles.h2} />
            </View>
          </View>
          <View style={styles.divider} />
          <ScrollView>
            {/* All chart business starts here */}

            <View style={{ backgroundColor: 'white' }}>
              <ChartPath
                height={SIZE / 2}
                stroke="black"
                strokeWidth={3}
                selectedStrokeWidth={3}
                width={SIZE}
                hapticsEnabled={true}
              />
              <ChartDot style={{ backgroundColor: 'black' }} />
            </View>

            {/* All chart business ends here */}
          </ScrollView>
        </ChartPathProvider>
      </View>
    )
}



export default Crypto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  h1_wrapper: {
    marginTop: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: "center",

  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#a9abb1',
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
})
