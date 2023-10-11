import { Stack } from "expo-router";
import { useColorScheme,  } from "react-native";
import Header from "../components/Header";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Colors from "@/constants/Colors";
import BackButton from "@/components/BackButton";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <Header />,
          }}
        />
        <Stack.Screen
          name="(modal)/Filter/index"
          options={{
            presentation: "modal",
            headerTitle: "Filtro",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (<BackButton />),
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
