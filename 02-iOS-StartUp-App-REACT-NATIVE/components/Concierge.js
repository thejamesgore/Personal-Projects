import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Concierge = () => {
    return (
        <View>
            <Text style={styles.text}>This is the conceirge componenet</Text>
        </View>
    )
}

export default Concierge

const styles = StyleSheet.create({
    text: {
        color: "white",
      },
})
