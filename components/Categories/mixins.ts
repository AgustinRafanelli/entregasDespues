import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  categoryScroll: {
    gap: 10,
    padding: 15,
  },
  categoryCard: {
    height: 100,
    width: 100,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset:{
      width: 40,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
    justifyContent: 'flex-start'
  },
  categotyText: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
