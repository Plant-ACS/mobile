import { colors } from '@styles/colors'
import { textsStyle } from '@styles/index'
import { View, Text } from 'react-native'

export default function Loader() {
  return(
    <View style={{
      flex: 1,
      width: "100%",
      height: "100%",
      paddingTop: 40,
      backgroundColor: colors["white-900"],
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={textsStyle.subtitle}>Carregando Informações...</Text>
    </View>
  )
}