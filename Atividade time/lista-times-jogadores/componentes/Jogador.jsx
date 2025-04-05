import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Jogador = ({ nome, numero, imagem }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imagem }} style={styles.imagem} />
      <Card.Content>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.numero}>Nº {numero}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  imagem: {
    height: 100,
    borderRadius: 10,
  },
  nome: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  numero: {
    color: '#555',
  },
});

export default Jogador;
