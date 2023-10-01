import { colors } from "@styles/colors";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export interface SplashProps {
  complete: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Splash({complete}: SplashProps) {
  return (
    <View style={{flex: 1, backgroundColor: colors["white-900"]}}>
      <LottieView source={require("../../assets/animation/plant-load.json")} autoPlay loop={false} onAnimationFinish={() => complete(true)} />
    </View>
  )
}