import { View, Image, Text } from "react-native";
import React from "react";
import { categories } from "@/assets/data/home";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./mixins";

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={styles.categoryScroll} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, i)=>(
        <View style={styles.categoryCard} key={i}>
          <Image source={category.img}/>
          <Text style={styles.categotyText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;
