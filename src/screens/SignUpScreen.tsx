import React, { useState } from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Text, Image } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Dimensions } from 'react-native';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const windowHeight = Dimensions.get('window').height;

  const handleSignUp = async () => {
    if (!username || !password || !confirmPassword) {
      setMessage('Todos os campos são obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, confirmPassword }),
      });

      const data = await response.json();
      if (!response.ok) {
        setMessage(data.message || 'Erro desconhecido');
      } else {
        setMessage('Usuário registrado com sucesso!');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Erro:', error);
      setMessage('Erro ao cadastrar usuário.');
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="black">
        {/* Imagem de fundo */}
        <Image
          source={{ uri: './assets/img/neo_quimica_arena.jpg' }}
          alt="background"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height={windowHeight}
          opacity={0.5}
        />

        {/* Título centralizado */}
        <Text fontSize="4xl" color="white" position="absolute" top="10%" textAlign="center">
          Sport Club Corinthians Paulista
        </Text>

        {/* Inputs e botões */}
        <Box mt="20%">
          <Input
            placeholder="Nome de Usuário"
            mb={4}
            bg="white"
            value={username}
            onChangeText={setUsername}
            size="lg" // Define o tamanho do input
          />
          <Input
            placeholder="Senha"
            mb={4}
            bg="white"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            size="lg" // Define o tamanho do input
          />
          <Input
            placeholder="Confirmar Senha"
            mb={4}
            bg="white"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            size="lg" // Define o tamanho do input
          />
          {message ? <Text color="red.500" mb={4}>{message}</Text> : null}

          <Button
            onPress={handleSignUp}
            bg="white"
            _text={{ color: 'black' }}
            _hover={{ bg: 'black', _text: { color: 'white' } }}
            _pressed={{ bg: 'gray.800' }}
          >
            Criar Conta
          </Button>
          <Button
            onPress={() => navigation.navigate('Login')}
            mt={4}
            bg="white"
            _text={{ color: 'black' }}
            _hover={{ bg: 'black', _text: { color: 'white' } }}
            _pressed={{ bg: 'gray.800' }}
          >
            Já tenho uma conta
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default SignUpScreen;
