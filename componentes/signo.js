import {View, Text, StyleSheet, Image} from 'react-native'
export default function Signo( props ){
    return(        
        <View>
           <Text>
               {props.nome}
           </Text>
           <Image 
              source={require(`../../assets/imagens/${props.nome}.jpg`)}
              style={{width: 100, height:100}}
            />
        </View>
    )
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
    }
    
  });
  