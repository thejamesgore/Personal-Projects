import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'



const ListItem = (props, onPress ) => {
  const isCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

const navigation = useNavigation()


  return (
    <View>
      {props.cryptoData.map((crypto, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Crypto')}
        >
          <View style={styles.item_wrapper}>
            {/* Left side view */}
            <View style={styles.left_wrapper}>
              <Image
                source={{
                  uri: crypto.image,
                }}
                style={styles.image}
              />
              <View style={styles.titles_wrapper}>
                <Text style={styles.title}>{crypto.id}</Text>
                <Text style={styles.subtitle}>
                  {crypto.symbol.toUpperCase()}
                </Text>
              </View>
            </View>

            {/* Right side view */}
            <View style={styles.right_Wrapper}>
              <Text style={styles.title}>
                {isCurrency.format(crypto.current_price)}
              </Text>
              <Text
                style={
                  (styles.subtitle,
                  {
                    color:
                      crypto.price_change_percentage_24h > 0 ? 'green' : 'red',
                  })
                }
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  item_wrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_Wrapper: {
    alignItems: 'flex-end',
  },
  image: {
    height: 40,
    width: 40,
  },
  titles_wrapper: {
    marginLeft: 8,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
    marginTop: 4,
  },
})
