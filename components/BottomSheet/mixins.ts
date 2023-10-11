import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const styles = StyleSheet.create({
  modal: {
    borderRadius: 0,
    backgroundColor: Colors.lightGrey,
  },
  container: {
    flex: 1,
    gap: 20,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  toggleInactive: {
    padding: 8,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  inactiveText: {
    color: Colors.primary,
  },
  selector: {
    flexDirection: "row",
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  options: {
    padding: 12,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: Colors.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  optionsText: {
    flex: 1,
  },
  button: {
    backgroundColor: Colors.primary,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
