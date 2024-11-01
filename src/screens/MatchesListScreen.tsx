import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Match {
  id: number;
  date: string;
  adversario: string; // Campo para o adversário
  campeonato: string; // Campo para o campeonato
  userId: number; // ID do usuário
}

const MatchesListScreen = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [adversario, setAdversario] = useState('');
  const [date, setDate] = useState('');
  const [campeonato, setCampeonato] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch matches from the backend
    axios.get('http://localhost:3000/api/matches') // Atualizado para o endpoint de partidas
      .then((response) => {
        setMatches(response.data); // Ajuste para acessar a resposta correta
      })
      .catch((error) => {
        console.error('Erro ao buscar partidas:', error);
      });
  }, []);

  const renderItem = ({ item }: { item: Match }) => (
    <View style={styles.matchItem}>
      <Text style={styles.matchText}>Adversário: {item.adversario}</Text>
      <Text style={styles.matchText}>Data: {item.date}</Text>
      <Text style={styles.matchText}>Campeonato: {item.campeonato}</Text>
      <Text style={styles.matchText}>ID do Usuário: {item.userId}</Text>
    </View>
  );

  const handleAddMatch = () => {
    if (!adversario || !date || !campeonato || !userId) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newMatch = {
      adversario,
      date,
      campeonato,
      userId: Number(userId), // Converter para número
    };

    axios.post('http://localhost:3000/api/matches', newMatch)
      .then(response => {
        setMatches([...matches, { ...newMatch, id: response.data.id }]); // Adiciona a nova partida à lista
        // Limpa os campos após a adição
        setAdversario('');
        setDate('');
        setCampeonato('');
        setUserId('');
      })
      .catch(error => {
        console.error('Erro ao adicionar partida:', error);
      });
  };

  return (
    <ImageBackground
      source={{ uri: './assets/img/neo_quimica_arena.jpg' }} // Coloque a URL da sua imagem de fundo aqui
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adversário"
          value={adversario}
          onChangeText={setAdversario}
        />
        <TextInput
          style={styles.input}
          placeholder="Data (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Campeonato"
          value={campeonato}
          onChangeText={setCampeonato}
        />
        <TextInput
          style={styles.input}
          placeholder="ID do Usuário"
          value={userId}
          onChangeText={setUserId}
          keyboardType="numeric" // Para garantir que seja um número
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddMatch}>
          <Text style={styles.buttonText}>Adicionar Partida</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cor de fundo com opacidade
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  matchItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cor de fundo com opacidade para melhor legibilidade
    borderRadius: 8,
    shadowColor: '#000', // Sombra para o box
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  matchText: {
    fontSize: 16,
    color: '#333', // Cor do texto
  },
  addButton: {
    backgroundColor: 'black', // Cor do botão
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 16,
  },
});

export default MatchesListScreen;
