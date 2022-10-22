import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import CardContato from "./cardContato";

export default function Consulta({navigation}) {
    const [contatos, setContatos] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/contatos')
        .then(response => response.json())
        .then(data => { setContatos(data)})
        .catch(error => console.log("erro: " + error))
    },[])

    return (
        <View>
            <FlatList
                data = {contatos}
                renderItem = {({ item }) => 
                    <CardContato 
                        id={item.id}
                        nome={item.nome}
                        email={item.email}
                        fone={item.fone}
                        navigation={navigation}
                    />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}