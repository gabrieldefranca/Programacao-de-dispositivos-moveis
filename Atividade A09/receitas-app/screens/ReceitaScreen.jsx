import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Title, Paragraph, Text, List, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Image source={{ uri: receita.imagem }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <Title style={{ marginTop: 10 }}>{receita.nome}</Title>
      <Paragraph>Tempo: {receita.tempoPreparo}</Paragraph>
      <Paragraph>Porções: {receita.porcoes}</Paragraph>

      <Title style={{ marginTop: 10 }}>Ingredientes</Title>
      {receita.ingredientes.map((item, index) => (
        <List.Item key={index} title={item} left={() => <List.Icon icon="checkbox-blank-circle-outline" />} />
      ))}

      <Title style={{ marginTop: 10 }}>Modo de Preparo</Title>
      {receita.modoPreparo.map((passo, index) => (
        <List.Item key={index} title={passo} left={() => <List.Icon icon="chevron-right" />} />
      ))}

      <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
        Voltar
      </Button>
    </ScrollView>
  );
}
