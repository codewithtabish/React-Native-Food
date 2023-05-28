import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { topImage } from '../data'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
    const navi=useNavigation()
    useEffect(() => {
        navi.setOptions({
            headerShown:false
        })

    }, [])

  return (
    <>
    <SafeAreaView className="bg-white pt-5 pb-2">
    <View className="flex space-x-2 items-center flex-row mt-6 mx-4" >
    <Image
    source={{uri:topImage}}
    className="w-7 h-7 rounded-full p-4 bg-gray-300 self-center"
    />
   <View className="flex-1 flex flex-row justify-between items-center">
    <View className="flex  gap-">
        <View className="flex flex-row items-center gap-3">
        <Text className="text-xs text-gray-400">Deliver Now !</Text>
        {/* <Text className="text-gray-700 font-semibold ">Current location</Text> */}
        <Fontisto name="caret-down" size={20} color="gray" />
        </View>



    </View>
    <AntDesign name="user" size={28} color="#00ccbb" />
   </View>
    </View>
    <View className="flex items-center flex-row mx-4 py-3 space-x-2">
    <View className="flex  flex-row flex-1 bg-gray-200 p-2 rounded-md items-center space-x-2 ">
    <Octicons name="search" size={24} color="gray" />
    <TextInput
    placeholder="Enter your resutrant"
    placeholderTextColor="gray"

    />

    </View>
    <Octicons name="filter" size={24} color="gray" />

    </View>
    <Categories/>



    </SafeAreaView>
    <ScrollView
    contentContainerStyle={{
      paddingBottom:60
    }}
  >
    <FeaturedRow
      id="123"
      title="Featured"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    />
    <FeaturedRow
      id="123"
      title="Tasty Discounts !"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    />
    <FeaturedRow
      id="123"
      title="Offers near you !"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    />

    </ScrollView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})