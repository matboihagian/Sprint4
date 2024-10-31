import React from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Text, Image } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta
import { Dimensions } from 'react-native';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="black">
        {/* Imagem de fundo */}
        <Image
          source={{ uri: './assets/img/neo_quimica_arena.jpg' }} // Coloque o link da sua imagem
          alt="background"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          width="100%"
          height={windowHeight}
          opacity={0.5} // Deixa a imagem um pouco transparente para o contraste
        />

        {/* Título centralizado */}
        <Text fontSize="4xl" color="white" position="absolute" top="10%" textAlign="center">
          Sport Club Corinthians Paulista
        </Text>

        <Box>
          {/* Campos de entrada de texto */}
          <Input placeholder="Email" mb={4} bg="white" />
          <Input placeholder="Senha" mb={4} bg="white" secureTextEntry />

          {/* Botão de Login */}
          <Button onPress={() => navigation.navigate('Main')} bg="white" _text={{ color: 'black' }}>
            Entrar
          </Button>

          {/* Botão de Cadastrar */}
          <Button onPress={() => navigation.navigate('SignUp')} mt={4} bg="white" _text={{ color: 'black' }}>
            Cadastrar
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
