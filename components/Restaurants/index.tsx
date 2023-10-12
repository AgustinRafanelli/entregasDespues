import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { restaurants } from "@/assets/data/home";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./mixins";
import { Link } from "expo-router";

const Restaurants = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {restaurants.map((restaurant, i) => (
        <Link href={"/"} key={i} asChild>
          <TouchableOpacity>
            <View style={styles.card}>
              <Image source={restaurant.img} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.rating}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text style={styles.distance}>{restaurant.distance} </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

export default Restaurants;
