import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

const SearchBar = () => (
  <View style={styles.container}>
    <View style={styles.searchField}>
      <Ionicons name="ios-search" size={20} color={Colors.medium} />
      <TextInput
        style={styles.input}
        placeholder="Restaurantes, supermercados"
      />
    </View>
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="options-outline" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </Link>
  </View>
);

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity>
            <Image
              style={styles.bike}
              source={require("../assets/images/bike.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.title}>Entrega - Despues</Text>
            <View style={styles.locationName}>
              <Text style={styles.subtitle}>Loma Hermosa, Bs As</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  innerContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  bike: {
    height: 30,
    width: 30,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
  },
  searchSection: {},
  searchField: {
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    alignItems: 'center'
  },
  input:{
    padding: 5,
    paddingHorizontal: 10,
    color: Colors.medium
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default Header;
