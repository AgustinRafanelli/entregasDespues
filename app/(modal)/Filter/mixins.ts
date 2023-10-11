import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  itemContaier: {
    backgroundColor: "#fff",
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderColor: Colors.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  itemText: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
  },
  checkbox: {
    borderBlockColor: Colors.primary,
    borderRadius: 4,
    borderWidth: 2,
  },
  footer: {
    position: "absolute",
    padding: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  fillButton: {
    flex: 1,
    height: 56,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  fillButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  outlineButton: {
    height: 56,
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});

export default styles;
