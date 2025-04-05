import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Jogador from './Jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <Card style={styles.card}>
      <Card.Title title={nome} subtitle={`Fundado em ${anoFundacao}`} />
      <Card.Cover source={{ uri: imagem }} />
      <Card.Content>
        <Paragraph>Mascote: {mascote}</Paragraph>
        <Title style={{ marginTop: 10 }}>Jogadores</Title>
        <FlatList
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => <Jogador {...item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
  },
});

export default Time;