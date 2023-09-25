import { useEffect } from "react";
import { Platform, View } from "react-native";
import Constants from "expo-constants";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";

import { colors } from "./src/styles";

import Home from "@pages/Home";
import Login from "@pages/Login";
import SelectACS from "@pages/SelectACS";
import SelectWifi from "@pages/SelectWifi";
import SettingsPlantation from "@pages/SettingPlantation";
import SettingsDevice from "@pages/SettingsDevice";
import CalibratingSensors from "@pages/CalibratingSensors";
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
      <StatusBar style="dark" backgroundColor="#F0F0F0" translucent />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Settings_Plantation"
          screenOptions={{
            headerShown: false,
            animation: 'none',
            contentStyle: {
              flex: 1,
              width: "100%",
              height: "100%",
              marginTop: Constants.statusBarHeight,
              backgroundColor: colors["white-900"],
            },
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Select_ACS" component={SelectACS} />
          <Stack.Screen name="Select_Wifi" component={SelectWifi} />
          <Stack.Screen name="Settings_Plantation" component={SettingsPlantation} />
          <Stack.Screen name="Settings_Device" component={SettingsDevice} />
          <Stack.Screen name="Calibating_Sensors" component={CalibratingSensors} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
