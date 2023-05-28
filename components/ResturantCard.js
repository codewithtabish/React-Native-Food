import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const ResturantCard = (props) => {
    const {title,imageUrl,rating,genre,address}=props
    const {width,height} =Dimensions.get('window')
  return (
    <TouchableOpacity className="mr-3 bg-white shadow-sm">
    <Image
    source={{uri:imageUrl}}
    style={{width:width-100,height:height/4}}

    />
    <View className="px-3 pb-4">
    <Text className="text-xl pt-2 font-bold">{title}</Text>
    <View className="flex flex-row gap-2 items-centers">
    <AntDesign name="staro" size={20} color="green" />
    <Text className="flex flex-row gap-3 text-gray-500">
      <Text>{rating}
      <Text> .{genre}</Text>
      </Text>

    </Text>

    </View>
    <View className="py-2 flex space-x-1 flex-row items-center">
    <EvilIcons name="location" size={24} color="red" />
    <Text className="text-gray-600">Near by . {address}</Text>

    </View>

    </View>

    </TouchableOpacity>
  )
}

export default ResturantCard

const styles = StyleSheet.create({})
