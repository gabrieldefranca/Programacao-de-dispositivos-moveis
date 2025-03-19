import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image , ScrollView} from 'react-native';

// Função que representa o componente
export default function App() {
  //Lógica do componente
const jogador = "Pedro Guilherme"

function Gols() {
  alert("Goooooooollll dele Pedro queixadaaaaa")
}

  //Retorno dessa função com template do que vai ser
  //renderizado na tela (JSX)
  return (
    <ScrollView>
    <View style={styles.container}>
      {/*<StatusBar style="auto" />*/}
      <Text style={{ fontSize:20, fontStyle:'Negrito'}}>{jogador}</Text>
      <Text style={{ fontSize:20, fontStyle:'Arial'}}>Número da Camiseta: 9</Text>
      <Text style={{ fontSize:20, fontStyle:'Arial'}}>Status: Lesionado</Text>
      <Text style={{ fontSize:20, fontStyle:'Arial'}}>Número de Títulos Com o Flamengo: 9 Títulos</Text>
      <Image
      source={{
        uri: 'https://i.pinimg.com/736x/37/fd/2a/37fd2aa86ec2191154f53130d0b6ab3e.jpg'
      }}
      style={{
        height: 300,
        width: 300,
        borderRadius: 15, 
        borderWidth: 3, 
        borderColor: 'black', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        elevation: 5,
      }}
      />
            <Image
      source={{
        uri: 'https://i.pinimg.com/736x/c4/cb/58/c4cb58dba68104036fb3ebc28afe560b.jpg'
      }}
      style={{
        height: 200,
        width: 200,
        borderRadius: 15, 
        borderWidth: 3, 
        borderColor: 'black', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        elevation: 5, 
      }}
      />
            <Image
      source={{
        uri: 'https://i.pinimg.com/736x/e2/67/da/e267da160d49fe44c717c0c6a4887eb6.jpg'
      }}
      style={{
        height: 200,
        width: 200,
        borderRadius: 15, 
        borderWidth: 3, 
        borderColor: 'black', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        elevation: 5, 
      }}
      />
            <Image
      source={{
        uri: 'https://i.pinimg.com/736x/91/bf/4e/91bf4e1d648867b7730bc8a8d9d0f1a4.jpg'
      }}
      style={{
        height: 200,
        width: 200,
        borderRadius: 15, 
        borderWidth: 3, 
        borderColor: 'black', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        elevation: 5, 
      }}
      />
            <Image
      source={{
        uri: 'https://i.pinimg.com/736x/8d/67/5d/8d675d13b2b4b75040db5a5deda535b2.jpg'
      }}
      style={{
        height: 200,
        width: 200,
        borderRadius: 15, 
        borderWidth: 3, 
        borderColor: 'black', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        elevation: 5, 
      }}
      />
            <Image
      source={{
        uri: 'https://i.pinimg.com/736x/a7/1e/c8/a71ec824084f43a4a01a752c75c8a59f.jpg'
      }}
      style={{
        height: 200,
        width: 200,
        borderRadius: 15, 
        borderWidth: 3, 
        borderColor: 'black', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        elevation: 5, 
      }}
      />
      <Button title='Enviar' onPress={Gols}></Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
