import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  roundedButton: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  restaurantName: {
    fontSize: 30,
    margin: 10,
  },
  restaurantDescription: {
    fontSize: 16,
    marginTop: 8,
    marginHorizontal: 16,
    lineHeight: 22,
    color: Colors.mediumDark,
  },
  touchableDescription: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  rating: {
    flex: 1,
    marginTop: 8,
    marginHorizontal: 16,
    color: Colors.green,
  },
  bike: {
    height: 20,
    width: 20,
  },
  sectionHeader: {
    fontWeight: "bold",
    marginTop: 24,
    margin: 10,
    fontSize: 22,
  },
  itemContainer: {
    padding: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  itemDescription: {
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 8,
  },
  itemImg: {
    width: 100,
    height: 100,
    borderRadius: 4,
    borderColor: Colors.medium,
    borderWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemText: {
    fontSize: 14,
    paddingTop: 8,
    color: Colors.mediumDark,
  },
});

export default styles;
