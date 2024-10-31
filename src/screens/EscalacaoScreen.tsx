// Escalacao.tsx
import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { NativeBaseProvider, Button } from 'native-base';

const EscalacaoScreen = ({ navigation }: { navigation: any }) => {
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../../assets/img/neo_quimica_arena.jpg')} // Imagem de fundo
        style={styles.background}
        imageStyle={{ width: '100%', height: '100%', resizeMode: 'cover' }} // Ajustado para preencher a tela sem zoom
      >
        <View style={styles.container}>
          <Image
            source={require('../../assets/img/escalacao.png')} // Certifique-se de que o caminho está correto
            style={styles.image}
            resizeMode="contain"
          />
          <Button mt={4} onPress={() => navigation.goBack()} _hover={{ bg: "black" }} bg="gray.600">
            Fechar
          </Button>
        </View>
      </ImageBackground>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: '80%', // Mantém a altura da imagem escalacao
    transform: [{ rotate: '-90deg' }], // Gira a imagem 90 graus no sentido anti-horário
  },
});

export default EscalacaoScreen;
