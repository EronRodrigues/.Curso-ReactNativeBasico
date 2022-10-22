import { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
import Toast from 'react-native-toast-message';

export default function Edita() {
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
            return
        }
        //console.log(`Você é ${nome}, seu e-mail é ${email} e tem o telefone ${fone}.`)
        //Grava na api
        var obj = {nome:nome,email:email,fone:fone}
        fetch('http://localhost:3000/contatos',
            {
                method: "POST",
                headers: {"Content-type": "application/json; charset=UTF-8"},
                body: JSON.stringify(obj)
            })
            .then(() => {
                Toast.show({
                    type: 'info',
                    text1: 'Atenção',
                    text2: 'Contato inserido com sucesso.'
                })
            })
            .catch((error) => {
                Toast.show({
                    type: 'error',
                    text1: 'Atenção',
                    text2: `Erro: ${error}.`
                })
            })
    }

    return (
        <View style={styles.container}>
            <br/>
            <TextInput
                placeholder="Informe o seu nome completo."
                defaultValue={nome}
                onChangeText={setNome}
                style={styles.instrucoes}
            />
            <br/>
            <TextInput
                placeholder="Informe o seu e-mail."
                defaultValue={email}
                onChangeText={setEmail}
                style={styles.instrucoes}
            />
            <br/>
            <TextInput
                placeholder="Informe o seu telefone."
                defaultValue={fone}
                onChangeText={setFone}
                style={styles.instrucoes}
            />
            <br/>
            <TouchableOpacity 
                onPress={salvar}
                style={styles.botoes}
            >
                <Text style={{fontFamily:'Century Ghotic'}}>SALVAR INFORMAÇÕES</Text>
            </TouchableOpacity>
            <br/>
        </View>
    )
}

const styles = StyleSheet.create({
    instrucoes: {
        padding: '8px',
        backgroundColor: 'aquamarine',
        fontFamily: 'Verdana',
        marginHorizontal: '20px',
    },
    botoes: {
        textAlign: 'center',
        backgroundColor: 'aqua',
        padding: '10px',
        marginHorizontal: '50px',
    },
    container: {
        backgroundColor: 'blue',
    }
});
  