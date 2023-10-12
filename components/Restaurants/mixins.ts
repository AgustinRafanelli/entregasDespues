import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  scroll: {
    gap: 15,
    padding: 15,
  },
  card: {
    height: 250,
    width: 300,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 40,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 8,
    justifyContent: "flex-start",
  },
  image: {
    flex: 5,
    width: undefined,
    height: undefined,
  },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
  name: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  rating: {
    color: Colors.green,
  },
  distance: {
    color: Colors.medium,
  },
});

export default styles;
