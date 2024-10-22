import React from 'react';
import { NativeBaseProvider, Box, Button, Center, Text, Image } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de importar isso
import { Dimensions } from 'react-native';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
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
          {/* Botão branco */}
          <Button
            onPress={() => navigation.navigate('Login')}
            bg="white"
            _text={{ color: 'black' }} // Cor do texto do botão
          >
            Ir para Login
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;
