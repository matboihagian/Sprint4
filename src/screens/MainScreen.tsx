import React from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { NativeBaseProvider, Box, Button, Center, Image, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type MainScreenScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;

type Props = {
  navigation: MainScreenScreenNavigationProp;
};

const MainScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <ImageBackground 
        source={require('../../assets/img/neo_quimica_arena.jpg')} 
        style={styles.background}
        imageStyle={{ resizeMode: 'cover', position: 'absolute', width: '100%', height: '100%' }} 
      >
        {/* Cabeçalho com imagem e título */}
        <ImageBackground
        >
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text fontSize="4xl" fontWeight="bold" color="white" textAlign="center">
              Sport Club Corinthians Paulista
            </Text>
            <Text fontSize="md" color="lightgray" textAlign="center" mt={6}>
              Louco por Ti, Corinthians
            </Text>
          </Box>
        </ImageBackground>

        {/* Texto "Elenco:" entre o cabeçalho e o card */}
        <Center mt={4}>
          <Text fontSize="4xl" fontWeight="bold" color="white">
            Elenco
          </Text>
        </Center>

        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {/* Linha do Professor Hete */}
          <Box flexDirection="row" justifyContent="center" mb={4} width="100%">
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} width="60%">
              <Image 
                source={require('../../assets/img/professorhete.png')} 
                alt="Hete Caetano"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Hete Caetano (C)
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Professor
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>
          </Box>

          {/* Linha 1 de Jogadores */}
          <Box flexDirection="row" justifyContent="space-around" flexWrap="wrap" width="100%" mb={4}>
            {/* Card do Hugo Souza */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/hugosouza.png')} 
                alt="Hugo Souza"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Hugo Souza 
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Goleiro
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Fagner */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/fagner.png')} 
                alt="Fagner"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Fagner
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Lateral
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Andre Ramalho */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/andreramalho.png')} 
                alt="Andre Ramalho"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Andre Ramalho
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Zagueiro
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Felix Torres */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/felixtorres.png')} 
                alt="Felix Torres"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Felix Torres
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Zagueiro
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Hugo */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/hugo.png')} 
                alt="Hugo"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Hugo
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Lateral
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Jose Martinez */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/josemartinez.png')} 
                alt="Jose Martinez"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Jose Martinez
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Meia
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Andre Carrillo */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/andrecarrillo.png')} 
                alt="Andre Carrillo"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Andre Carrillo
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Meia
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Igor Coronado */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/igorcoronado.png')} 
                alt="Igor Coronado"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Igor Coronado
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Meia
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Rodrigo Garro */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/rodrigogarro.png')} 
                alt="Rodrigo Garro"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Rodrigo Garro
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Meia
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Memphis Depay */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/memphisdepay.png')} 
                alt="Memphis Depay"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Memphis Depay
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Atacante
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Romero */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/romero.png')} 
                alt="Angel Romero"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Angel Romero
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Atacante
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Yuri Alberto */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/yurialberto.png')} 
                alt="Yuri Alberto"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Yuri Alberto
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Atacante
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Talles Magno */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/tallesmagno.png')} 
                alt="Talles Magno"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Talles Magno
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Atacante
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

            {/* Card do Pedro Raul */}
            <Box bg="rgba(255, 255, 255, 0.8)" rounded="lg" shadow={2} alignItems="center" px={4} py={2} m={2} width="30%">
              <Image 
                source={require('../../assets/img/pedroraul.png')} 
                alt="Pedro Raul"
                size="md"
                mb={2}
                borderRadius={8}
              />
              <Text fontSize="md" fontWeight="bold" textAlign="center">
                Pedro Raul
              </Text>
              <Text fontSize="sm" color="gray.600" textAlign="center">
                Atacante
              </Text>
              <Button size="sm" mt={2} onPress={() => navigation.navigate('Escalacao')} _hover={{ bg: "black" }} bg="gray.600">
                Escalação
              </Button>
            </Box>

          </Box>
        </ScrollView>
      </ImageBackground>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  headerBackground: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    paddingBottom: 40,
  },
});

export default MainScreen;
