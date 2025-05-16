import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Card, Text, Title } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const n = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(n)) numeros.push(n);
    }
    const jogoOrdenado = numeros.sort((a, b) => a - b);
    setJogosMegaSena([...jogosMegaSena, jogoOrdenado]);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.titulo}>Jogos Gerados: {jogosMegaSena.length}</Title>
      <Button mode="contained" onPress={gerarJogo} style={styles.botao}>Gerar Jogo</Button>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>Jogo {index + 1}: {item.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#1a1a1a' },
  titulo: { color: '#0077b6', marginBottom: 10 },
  botao: { marginBottom: 16, backgroundColor: '#9a9a9a' },
  card: { backgroundColor: '#9a9a9a', marginVertical: 8 },
});