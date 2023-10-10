import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

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
    flexDirection: "row",
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    alignItems: "center",
  },
  input: {
    padding: 5,
    paddingHorizontal: 10,
    color: Colors.medium,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default styles