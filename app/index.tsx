import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import styles from "./mixins";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{}}>
        <Categories />
        <Text style={styles.header}>Los mas pedidos en tu barrio!</Text>
        <Restaurants />
        <Text style={styles.header}>Ofertas cerca tuyo</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
