import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import ResturantCard from './ResturantCard';
import { imageUrl } from '../helper/constant';
import { secondImage } from '../data';

const FeaturedRow = ({id,title,description}) => {
  return (
    <View className="mt-3">
    <View className="px-4">
    <View className="flex justify-between flex-row items-center ">
    <View>
    <Text className="text-sm font-black">{title}</Text>
        <Text className="text-sm text-gray-500 py-1">{description}</Text>
    </View>
    <AntDesign name="arrowright" size={24} color="#00ccbb" />

    </View>
    </View>
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal:15
    }}
    >
    <ResturantCard
      id="123"
      title="yo soushi"
      rating={3.4}
      genre="Japanees"
      address="123 Main"
      shortDescription="This is the sample description"
      long="1233"
      lat={344}
      dishes={[]}
      imageUrl={"https://links.papareact.com/gn7"}
    />
    <ResturantCard
      id="123"
      title="yo soushi"
      rating={3.4}
      genre="Japanees"
      address="123 Main"
      shortDescription="This is the sample description"
      long="1233"
      lat={344}
      dishes={[]}
      imageUrl={secondImage}
    />
    <ResturantCard
      id="123"
      title="yo soushi"
      rating={3.4}
      genre="Japanees"
      address="123 Main"
      shortDescription="This is the sample description"
      long="1233"
      lat={344}
      dishes={[]}
      imageUrl={"https://links.papareact.com/gn7"}
    />
    <ResturantCard
      id="123"
      title="yo soushi"
      rating={3.4}
      genre="Japanees"
      address="123 Main"
      shortDescription="This is the sample description"
      long="1233"
      lat={344}
      dishes={[]}
      imageUrl={"https://links.papareact.com/gn7"}
    />
    <ResturantCard
      id="123"
      title="yo soushi"
      rating={3.4}
      genre="Japanees"
      address="123 Main"
      shortDescription="This is the sample description"
      long="1233"
      lat={344}
      dishes={[]}
      imageUrl={"https://links.papareact.com/gn7"}
    />


    </ScrollView>



    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})