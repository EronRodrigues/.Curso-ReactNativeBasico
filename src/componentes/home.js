import { View, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <View>
            <Button
                title='Cadastro'
                onPress={() => {
                    navigation.navigate('cadastro')
                }}
            />
            <br/>
            <Button
                title='Consulta'
                onPress={() => {
                    navigation.navigate('consulta')
                }}
            />
        </View>
    )
}
