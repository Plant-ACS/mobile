import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Input from './src/components/Input'
import Button from './src/components/Button'
import { colors } from './src/styles'
import CheckButton from '@components/CheckButton';
import SelectBox from '@components/SelectBox'

export default function App() {
  return (
    <View style={{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors['white-900'],
      paddingHorizontal: 40,
    }}>
      <Text>Hola hermanos! Arriba!</Text>
      <Input placeholder="test input" setValue={(value) => console.log(value)} />
      <Button text="test button" onPress={() => console.log('test')} theme='secondary' isHover={false} />
      <CheckButton onPress={(value) => console.log(value)} />
      <SelectBox placeholder="Selecione um país..." options={["Brasil", "Argentina", "Paraguai"]} setValue={(k, e) => console.log(k, e)} />
      <StatusBar style="auto" />
    </View>
  );
}


