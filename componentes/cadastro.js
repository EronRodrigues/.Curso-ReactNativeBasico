import { useState } from "react";
import { TextInput, View, Button, Text, StyleSheet, Vibration } from "react-native";
import Signo from "./signo";

const signo = ['Aries','Touro',"Gemeos","Cancer","Leao","Virgem","Libra","Escorpiao","Sagitario","Capricornio","Aquario","Peixes"]

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState()
    const [ordem, setOrdem] = useState()
    const [ok, setOk] = useState('')

    const validar = () => {
        if (nome == '' || nascimento == '') {
            Vibration.vibrate()
            setOk(false)
            return
        }

        var data = new Date(nascimento)
        var dia = data.getDate() + 1
        var mes = data.getMonth() +1
        
        if ((dia > 20 && mes == 3) || (dia < 20 && mes == 4)) {
           setOrdem(0)
           setOk(true)
           return
        }   
        
        if ((dia > 19 && mes == 4) || (dia < 20 && mes == 5)) {
            setOrdem(1)
            setOk(true)
            return
         } 

         if ((dia > 19 && mes == 5) || (dia < 21 && mes == 6)) {
            setOrdem(2)
            setOk(true)
            return
         }   

         if ((dia > 20 && mes == 6 ) || (dia < 23 && mes == 7)) {
            setOrdem(3)
            setOk(true)
            return
         }

         if ((dia > 22 && mes == 7) || (dia < 24 && mes == 8)) {
            setOrdem(4)
            setOk(true)
            return
         }

         if ((dia > 23 && mes == 8) || (dia < 23 && mes == 9)) {
            setOrdem(5)
            setOk(true)
            return
         }

         if ((dia > 22 && mes == 9) || (dia < 24 && mes == 10)) {
            setOrdem(6)
            setOk(true)
            return
         }

         if ((dia > 23 && mes == 10) || (dia < 23 && mes == 11)) {
            setOrdem(7)
            setOk(true)
            return
         }

         if ((dia > 22 && mes == 11) || (dia < 22 && mes == 12)) {
            setOrdem(8)
            setOk(true)
            return
         }

         if ((dia > 21 && mes == 12) || (dia < 21 && mes == 1)) {
            setOrdem(9)
            setOk(true)
            return
         }

         if ((dia > 20 && mes == 1) || (dia < 19 && mes == 2)) {
            setOrdem(10)
            setOk(true)
            return
         } 

         if ((dia > 18 && mes == 2) || (dia < 21 && mes == 3)) {
            setOrdem(11)
            setOk(true)
            return
         }
        
    }    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Nome</Text>
            <TextInput
                style={styles.textInput}
                defaultValue={nome}
                onChangeText={setNome}
                placeholder="Ex.: Ana da Silva"
            />

            <Text style={styles.header}>Idade</Text>
            <TextInput
                style={styles.textInput}
                defaultValue={nascimento}
                onChangeText={setNascimento}
                placeholder="Ex.: yyyy-mm-dd"
            />

            <View
                style={styles.btnContainer}
            >
                <Button
                    title="ok"
                    onPress={validar}
                />
            </View>

            { ok ? <Signo nome={signo[ordem]} /> : null }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginbottom: 10,
        flex: 1,
        padding: 10
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 24,
        marginVertical: 5
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
    },
    btnContainer: {
        backgroundColor: "white",
        marginVertical: 10
    }
});