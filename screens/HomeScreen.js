import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f8ff', // Cor de fundo da tela
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    buttonContainer: {
      backgroundColor: '#add8e6', // Cor de fundo do container do botão
      margin: 10,
      width: windowWidth * 0.5, // 50% da largura da tela
      borderRadius: 5,
    },
  });
// Este é um exemplo de tela inicial simples em React Native
// que inclui dois botões para navegar para as telas de detalhes e perfil.
// Ao pressionar os botões, ele navega para as respectivas telas.
// Você pode expandir este exemplo para incluir mais funcionalidades,
// como exibir uma lista de itens ou informações adicionais.
// Certifique-se de que o React Navigation esteja configurado corretamente
  