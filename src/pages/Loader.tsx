import { colors } from '@styles/colors'
import { textsStyle } from '@styles/index'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { PageProps } from '../types'
import { useEffect, useState } from 'react'

export interface LoaderProps extends PageProps {
  route: {
    params?: {
      action: () => true | false,
      next: string,
      paramsNext?: any,
      name: string
    } | any
  }
}

export default function Loader({route, navigation}: LoaderProps) {
  const [complete, setComplete] = useState<boolean>(false)
  useEffect(() => {
    if(route.params?.action()) {
      navigation.navigate(route.params.next, route.params.paramsNext)
    }
  }, [])
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
      {
        route.params?.name &&
        <LottieView autoPlay loop={true} source={require(`../../assets/animation/plant-load.json`)} />
      }
      <Text style={textsStyle.subtitle}>Carregando Informações...</Text>
    </View>
  )
}