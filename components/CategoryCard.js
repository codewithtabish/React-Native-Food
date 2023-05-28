import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({imageUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
    <Image
    source={{uri:imageUrl}}
        className="h-20 w-20  rounded-md"

    />
      <Text className="absolute bottom-1 left-1 font-bold text-white">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})