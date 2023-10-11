import React, { useRef } from "react";
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import BottomSheet from "../BottomSheet";
import styles from "./mixins";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => (
  <View style={styles.container}>
    <View style={styles.searchField}>
      <Ionicons name="ios-search" size={20} color={Colors.medium} />
      <TextInput
        style={styles.input}
        placeholder="Restaurantes, supermercados"
      />
    </View>
    <Link href={"/(modal)/Filter"} asChild>
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="options-outline" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </Link>
  </View>
);

const Header = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.png")}
          />
        </TouchableOpacity>

        <View style={{ flexGrow: 1 }}>
          <TouchableOpacity onPress={openModal}>
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

export default Header;
