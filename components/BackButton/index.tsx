import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";

const BackButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => {navigation.goBack()}}>
      <Ionicons name="close-outline" size={20} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default BackButton;
