import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function VerificaIdade() {
  const [nome, setNome] = useState()
  const [sobrenome, setSobrenome] = useState()
  const [idade, setIdade] = useState()
  const [msg, setMsg] = useState()

  function verificar() {
    var message = 'maior'
    if (idade < 18) {
      message = 'menor'
    }
    setMsg(`${nome} ${sobrenome}, você tem ${idade} anos, portanto é ${message} de idade.`)
  }

  return (
    <View style={styles.container}>
      <Text>Olá Mundo!</Text>
      <TextInput
        style={styles.input}
        placeholder='Informe o seu nome.'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe o seu sobrenome.'
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe a sua idade.'
        value={idade}
        onChangeText={setIdade}
      />
      <TouchableOpacity
        style={styles.bttouch}
        onPress={verificar}
      >
        <Text>Clique Aqui</Text>
      </TouchableOpacity>
      <Text>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resImc: {
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 2,
    marginVertical: 2,
  },
  bttouch: {
    backgroundColor: 'yellow',
    padding: 5,
    borderWidth: 2,
    borderColor: 'green',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
