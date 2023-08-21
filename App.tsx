/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-blue-500 flex-1 justify-end py-10">
      <Text className="text-center">Hola hermanos! Arriba!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


