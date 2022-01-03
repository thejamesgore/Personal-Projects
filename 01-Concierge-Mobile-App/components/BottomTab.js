import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity>
        <Icon icon="user-circle" text="Account" color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon icon="info-circle" text="Guide" color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon icon="comment" text="Live Chat" color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const Icon = (props) => (
  <View style={{ paddingLeft: 30, paddingRight: 30 }}>
    <FontAwesome5
      name={props.icon}
      size={25}
      style={{ marginBottom: 3, alignSelf: 'center' }}
      color="#fff"
    />
    <Text style={{ color: '#fff' }}>{props.text}</Text>
  </View>
)
