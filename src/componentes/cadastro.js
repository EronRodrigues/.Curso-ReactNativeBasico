import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    function salvar() {
        if ( nome == '' ) {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'O nome deve ser informado.'
            })
            return
        }
        if ( email == '' ) {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'O e-mail deve ser informado.'
            })
            return
        }
        if ( fone == '' ) {
            Toast.show({
                type: 'info',
                text1: 'Atenção',
                text2: 'O telefone deve ser informado.'
            })
            console.log(`Seu nome é ${nome}, seu e-mail é ${email} e seu telefone é ${fone}.`)
        }  
    }

    return (
        <View>
            <br/>
            <TextInput 
                placeholder='Informe o seu nome.'
                defaultValue={nome}
                onChangeText={setNome}
                style={styles.instrucoes}
            />
            <br/>
            <TextInput 
                placeholder='Informe o seu e-mail.'
                defaultValue={email}
                onChangeText={setEmail}
                style={styles.instrucoes}
            />
            <br/>
            <TextInput 
                placeholder='Informe o seu telefone.'
                defaultValue={fone}
                onChangeText={setFone}
                style={styles.instrucoes}
            />
            <br/>
            <TouchableOpacity
                onPress={salvar}
            >
                <Text style={styles.botoes}>SALVAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    instrucoes: {
        padding: '10px',
        backgroundColor: 'gold',
        marginHorizontal: '20px',
    },
    botoes: {
        padding: '10px',
        backgroundColor: 'orange',
        textAlign: 'center',
        marginHorizontal: '50px',
    }
});
  