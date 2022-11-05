import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default function Consulta() {
    return (
      <View style={styles.inner}>
            <Text style={styles.header}>Header</Text>
            <TextInput placeholder="Username" style={styles.textInput} />
            
           <View >
              <Button title="Submit" onPress={() => null} />
            </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
    },
    btnContainer: {
      backgroundColor: "white"
    }
  });
  