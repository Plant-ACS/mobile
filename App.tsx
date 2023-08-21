/// <reference types="nativewind/types" />
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Input from './src/components/Input'
import Button from './src/components/Button'

export default function App() {
  return (
    <View className="bg-white-900 flex-1 justify-end py-10 px-10">
      <Text className="text-center">Hola hermanos! Arriba!</Text>
      <Input placeholder="test input" setValue={(value) => console.log(value)} />
      <Button text="test button" onPress={() => console.log('test')} theme='secondary' isHover={false} />
      <StatusBar style="auto" />
    </View>
  );
}


