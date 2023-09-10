import { useEffect } from "react"
import { StyleProp, ViewStyle } from "react-native"
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated"

export interface IPulseProps {
  style: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>,
  delay: number,
  duration?: number
}

export default function Pulse({ style, delay, duration }: IPulseProps) {
  const shape = useSharedValue(0);

  duration = duration? duration : 4000

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - shape.value,
      transform: [
        {
          scale: interpolate(shape.value, [0, 1], [0, 4]),
        },
      ],
    };
  })
  useEffect(() => {
    shape.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration,
        }),
        -1,
        false
      )
    )
  }, [])
  return(
    <Animated.View style={[style, animationStyle]}/>
  )
}