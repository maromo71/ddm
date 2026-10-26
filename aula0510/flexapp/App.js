
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxVermelho}>
        <Text style={styles.texto}>Box 1</Text>
      </View>
      <View style={styles.boxAzul}>
        <Text style={styles.texto}>Box 2</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  boxVermelho: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxAzul: {
    width: 150,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  texto: {
    color: '#fff',
    fontWeight: 'bold'
  }
})