import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import Header from "../components/Header";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen name="index" options={{
        header: () => <Header/>
      }} />
    </Stack>
  );
}
