import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function CardContato(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.foto} source={require('../../assets/youtube.png')}/>
            <View style={styles.dados}>
                <Text>Nome: {props.nome}</Text>
                <Text>E-mail: {props.email}</Text>
                <Text>Telefone: {props.fone}</Text>
            </View>
            <TouchableOpacity
                style={styles.botoes}
                onPress = {() => props.navigation.navigate('edita',{id: props.id})}
            >
                <Text>Editar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'navajowhite',
        width: 200,
        height: 190,
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    titulo: {
        textAlign: "center", 
        marginVertical: 15,
        color: 'red',
        fontWeight: 300,
        fontSize: 20,
    },
    foto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
    },
    dados: {
        borderTopColor: 'orange',
        borderTopWidth: 2,
        marginVertical: 5,
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        paddingVertical: 5,
    },
    botoes: {
        textAlign: 'center',
        backgroundColor: 'aqua',
        padding: '10px',
        marginHorizontal: '50px',
    }
});
  