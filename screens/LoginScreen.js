import react from 'react';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Usuário:', username);
    console.log('Senha:', password);
    // Navegar para a tela de perfil após o login
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
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
// Este é um exemplo de tela de login simples em React Native
// que inclui um botão de login. Ao pressionar o botão, ele registra
// o nome de usuário e a senha no console e navega para a tela de perfil.
// Você pode expandir este exemplo para incluir campos de entrada
// para o nome de usuário e senha, além de adicionar lógica de autenticação real.
// Certifique-se de que o React Navigation esteja configurado corretamente
// em seu projeto para que a navegação funcione corretamente.
// Lembre-se de instalar as dependências necessárias, como react-navigation e react-native-gesture-handler,
// se ainda não estiverem instaladas. Você pode fazer isso usando o seguinte comando:
// npm install @react-navigation/native @react-navigation/native-stack react-native-gesture-handler
// Além disso, certifique-se de que o React Native esteja configurado corretamente
// em seu ambiente de desenvolvimento. Você pode seguir a documentação oficial do React Native
// para obter instruções sobre como configurar o ambiente:
// https://reactnative.dev/docs/environment-setup

