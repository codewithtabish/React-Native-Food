import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { topImage } from '../data'

const Categories = () => {
  return (
    <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator= {false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}

    >
      <CategoryCard imageUrl={topImage} title="Burger"/>
      <CategoryCard imageUrl={topImage} title="Burger"/>
      <CategoryCard imageUrl={topImage} title="Burger"/>
      <CategoryCard imageUrl={topImage} title="Burger"/>
      <CategoryCard imageUrl={topImage} title="Burger"/>
      <CategoryCard imageUrl={topImage} title="Burger"/>
    </ScrollView>

  )
}

export default Categories

const styles = StyleSheet.create({})