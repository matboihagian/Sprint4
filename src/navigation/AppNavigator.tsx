import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainScreen from '../screens/MainScreen';
import ScheduleConsultationScreen from '../screens/ScheduleConsultationScreen';
import ConfirmAppointmentScreen from '../screens/ConfirmAppointmentScreen';
import EscalacaoScreen from '../screens/EscalacaoScreen';
import MatchesListScreen from '../screens/MatchesListScreen'; // Importando a nova tela

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  ScheduleConsultation: undefined;
  ConfirmAppointment: undefined;
  Escalacao: undefined;
  MatchesList: undefined; // Adicionando a nova rota
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Tela Inicial' }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Acesse sua conta' }} 
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ title: 'Cadastrar' }} 
      />
      <Stack.Screen 
        name="Main" 
        component={MainScreen} 
        options={{ title: 'Tela Principal' }} 
      />
      <Stack.Screen 
        name="ScheduleConsultation" 
        component={ScheduleConsultationScreen} 
        options={{ title: 'Agendar Consulta' }} 
      />
      <Stack.Screen 
        name="ConfirmAppointment" 
        component={ConfirmAppointmentScreen} 
        options={{ title: 'Confirmação de Agendamento' }} 
      />
      <Stack.Screen 
        name="Escalacao" 
        component={EscalacaoScreen} 
        options={{ title: 'Escalação' }} 
      />
      <Stack.Screen 
        name="MatchesList" // Adicionando a nova tela
        component={MatchesListScreen} 
        options={{ title: 'Lista de Partidas' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
