import { useEffect } from "react"
import Animated, { Easing, StyleProps, interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated"

export interface IShowProps {
  delay?: number,
  style?: StyleProps,
  duration: number,
  children: React.ReactNode
}

export default function Show({style, duration, delay, ...props}: IShowProps) {
  const shared = useSharedValue(-50)
  const animation = useAnimatedStyle(() => ({
    transform: [
      { translateY: shared.value }
    ]
  }))

  useEffect(() => {
    shared.value = 0, withTiming(0, { duration: duration*1000, easing: Easing.bounce })
  }, [10])
  return(
    <Animated.View style={[style, animation]} {...props} />
  )
}