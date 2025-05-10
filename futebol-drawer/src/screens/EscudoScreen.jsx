import React from 'react';
import { View, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <Card style={{ margin: 16 }}>
      <Card.Title title={time.nome} />
      <Card.Content>
        <Image source={{ uri: time.escudo }} style={{ width: 150, height: 150, alignSelf: 'center' }} />
        <Text>Fundação: {time.fundacao}</Text>
        <Text>Estádio: {time.estadio}</Text>
        <Text>Mascote: {time.mascote}</Text>
        <Text>Cores: {time.cores.join(', ')}</Text>
      </Card.Content>
    </Card>
  );
}