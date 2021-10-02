import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'



const HomeScreen = () => {
const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => navigation.navigate("Markets")}
            >
           <Text>This is the homescreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
