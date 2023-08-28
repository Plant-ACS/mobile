import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { colors } from './src/styles'
import Loader from '@pages/Loader'

export default function App() {
  return (
    <View style={{
      flex: 1,
      width: "100%",
      height: "100%",
      paddingTop: 40,
      backgroundColor: colors["white-900"],
    }}>
      <Loader />
      <StatusBar style="dark" backgroundColor={colors["white-900"]} />
    </View>
  );
}


