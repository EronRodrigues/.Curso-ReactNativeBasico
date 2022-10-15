import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Imc() {
    const [altura, setAltura] = useState()
    const [peso, setPeso] = useState()
    const [imc, setImc] = useState()
    const [status, setStatus] = useState()

    function calcular() {
        if (validaDados()) {
            let x = peso / (altura * altura)
            setImc(x.toFixed(2))
            verificarStatus(x)
        }
      }

    function verificarStatus(indice) {
        if (indice < 18.5)
            setStatus('Seu peso está abaixo do normal.')
        else if (indice < 25)
            setStatus('Seu peso está dentro do normal.')
        else if (indice < 30)
            setStatus('Seu peso está um pouco acima do normal.')
        else if (indice < 35)
            setStatus('Você está com obesidade grau I.')
        else if (indice < 40)
            setStatus('Você está com obesidade grau II.')
        else if (indice >= 40)
            setStatus('Você está com obesidade grau III.')
    }

    function validaDados() {
        if ( peso == undefined ) {
            // alert('O peso deve ser informado.')
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'O peso deve ser informado.'
            })
            return false
        }
        if ( altura == undefined ) {
            // alert('A altura deve ser informada.')
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'A altura deve ser informada.'
            })
            return false
        }
        return true
      }

    return (
        <View style={styles.container}>
            <Text 
                style={styles.rotulo}
            >Calculadora IMC
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Informe o seu peso.'
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder='Informe a sua altura.'
                value={altura}
                onChangeText={setAltura}
            />
            <TouchableOpacity
                style={styles.bttouch}
                onPress={calcular}
            >
                <Text style={{textAlign:'center'}}>Saiba seu IMC</Text>
            </TouchableOpacity>
            {
                status ? <View style={styles.resultado}>
                        <Text>Índice: <span style={{color:'purple'}}>{imc}</span></Text>
                        <Text>Status: {status}</Text>
                        </View> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        margin: 5,
        paddingVertical: 20,
        width: Dimensions.get('window').width-10,
        fontFamily: 'Times New Roman',
    },
    rotulo: {
        textAlign: 'center',
        color: 'blue',
        marginVertical: 5,
        fontSize: 40,
        fontFamily: 'Times New Roman',
    },
    input: {
        backgroundColor: '#fff',
        padding: 5,
        borderWidth: 2,
        marginVertical: 1,
        marginHorizontal: 10,
        fontFamily: 'Times New Roman',
    },
    bttouch: {
        backgroundColor: 'yellow',
        padding: 5,
        borderWidth: 2,
        borderColor: 'green',
        margin: 20,
    },
    resultado: {
        backgroundColor: 'red',
        width: Dimensions.get('window').width/4,
        padding: 10,
    },
});
  