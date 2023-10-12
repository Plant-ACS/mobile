import { Text, View } from "react-native"
import Button from "@components/Button"
import Input from "@components/Input"
import { textsStyle, viewsStyle } from "../styles"
import { PageProps } from "../types"

export default function Login({...props}: PageProps) {
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
                <Button text="Entrar" isHover onPress={() => props.navigation.navigate("", {})}></Button>
                <Button text="Cadastrar-se" onPress={() => props.navigation.navigate("Register")}></Button>
            </View>
        </View>
    )
}