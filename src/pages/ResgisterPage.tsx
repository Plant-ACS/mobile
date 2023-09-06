import { Text, View } from "react-native"
import Button from "@components/Button"
import Input from "@components/Input"
import { MaterialIcons } from "@expo/vector-icons"
import { separatorsStyles, textsStyle, viewsStyle } from "../styles"

export default function RegisterPage(){
    return(
        <View style={viewsStyle.form}>
            <Text style={textsStyle.subtitle_3}>Intelligreen</Text>

            <View style={viewsStyle.group_inputs}>
                <Text style={textsStyle.label}>Nome de Usuário</Text>

                <Input placeholder="Jãumzin..." setValue={(value)=> console.log(value)}></Input>

                <Text style={textsStyle.label}>Senha</Text>
                <Input placeholder="********" setValue={(value)=> console.log(value)}></Input>
            </View>

            <View style={viewsStyle.group_buttons}>
                <Button text="Entrar" isHover={true} theme="primary" onPress={()=> console.log("press enter")}></Button>
                <Button text="Cadastrar-se" isHover={false} theme="primary" onPress={()=> console.log("press Register")}></Button>
                <Button text="Google" isHover={false} theme="primary" onPress={()=> console.log("press Google")}>
                    <MaterialIcons name="link" size={30} color={"#3F3D3B"} />
                </Button>
            </View>
        </View>
    )
}