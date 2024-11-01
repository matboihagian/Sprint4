import React, { useState } from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Text, Image } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Alert as RNAlert, Dimensions } from 'react-native';
import { login } from '../api/auth';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const windowHeight = Dimensions.get('window').height;

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      console.log('Token:', token);
      RNAlert.alert('Login realizado com sucesso!');
      navigation.navigate('Main');
    } catch (err: unknown) {
      if (err instanceof Error) {
        RNAlert.alert('Erro', err.message);
      } else {
        RNAlert.alert('Erro', 'Ocorreu um erro inesperado.');
      }
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
            placeholder="Usuário"
            mb={4}
            value={username}
            onChangeText={setUsername}
            bg="white"
            size="lg" // Define o tamanho do input
          />
          <Input
            placeholder="Senha"
            mb={4}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            bg="white"
            size="lg" // Define o tamanho do input
          />
          <Button
            onPress={handleLogin}
            bg="white"
            _text={{ color: 'black' }}
            _hover={{ bg: 'black', _text: { color: 'white' } }}
            _pressed={{ bg: 'gray.800' }}
          >
            Entrar
          </Button>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            mt={4}
            bg="white"
            _text={{ color: 'black' }}
            _hover={{ bg: 'black', _text: { color: 'white' } }}
            _pressed={{ bg: 'gray.800' }}
          >
            Cadastrar
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
