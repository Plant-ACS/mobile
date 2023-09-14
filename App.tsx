import { useEffect } from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";

import { colors } from "./src/styles";

import Home from "@pages/Home";

preventAutoHideAsync();
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand: require("./assets/fonts/Quicksand.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand_Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="dark" backgroundColor="#F0F0F0" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              flex: 1,
              width: "100%",
              height: "100%",
              paddingTop: 38,
              backgroundColor: colors["white-900"],
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
