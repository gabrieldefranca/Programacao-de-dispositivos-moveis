import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { PaperProvider } from 'react-native-paper'
import Time from './componentes/Time';

export default function App() {
  return (
    <PaperProvider>
      <View style={style.container}>
        <statusbar style="auto"/>
        <Text></Text>
      </View>
    </PaperProvider>
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
