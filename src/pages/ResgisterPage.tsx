import { Text, View } from "react-native"
import Button from "@components/Button"
import Input from "@components/Input"
import { colors } from "@styles/colors"
import { MaterialIcons } from "@expo/vector-icons"

export default function RegisterPage(){
    return(
        <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors['white-900'],
            paddingHorizontal: 40,
          }}>
            <Text style = {{
                fontSize: 22.5,
                fontWeight: "300",
                color: colors["black-900"]
            }}>Nome de Usuário</Text>

            <Input placeholder="User" setValue={(value)=> console.log(value)}></Input>

            <Text style = {{
                fontSize: 22.5,
                fontWeight: "300",
                color: colors["black-900"],
                top: '1.4%'
            }}>Senha</Text>

            <View style ={{width: '100%', top: '1.5%'}}>
                <Input placeholder="********" setValue={(value)=> console.log(value)}></Input>
            </View>

            <View style = {{
                width : '100%',
                top: '10%'
            }}>
                <Button text="Entrar" isHover={true} theme="primary" onPress={()=> console.log("press enter")}></Button>
            </View>

            <View style = {{
                width : '100%',
                top: '12%',
                shadowOpacity: 0.25,
                shadowColor: '#06908F'
            }}>
                <Button text="Cadastrar-se" isHover={false} theme="primary" onPress={()=> console.log("press Register")}></Button>
            </View>

            <View style = {{
                width : '100%',
                top: '20%',
                shadowOpacity: 0.25,
                shadowColor: '#06908F'
            }}>

            <Button text="Google" isHover={false} theme="primary" onPress={()=> console.log("press Google")}>
                <MaterialIcons name="link" size={30} color={"#3F3D3B"} />
            </Button>
            </View>
        </View>
    )
}