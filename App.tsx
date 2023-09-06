import { StatusBar } from 'expo-status-bar'
import { useEffect } from "react"
import { View } from 'react-native'
import { colors } from './src/styles'
import Home from '@pages/Home'
import { useFonts } from "expo-font"
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen'

preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Quicksand": require("./assets/fonts/Quicksand.ttf"),
    "Quicksand-Bold": require("./assets/fonts/Quicksand_Bold.otf")
  })

  useEffect(() => {
    if(fontsLoaded)
      hideAsync()
  }, [fontsLoaded])

  if(!fontsLoaded)
    return null

  return (
    <>
      <StatusBar style="dark" backgroundColor="#F0F0F0" />
      <View style={{
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 38,
        backgroundColor: colors["white-900"],
      }}>
        <Home />
      </View>
    </>
  );
}


