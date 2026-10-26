import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BookFormScreen from './src/screen/BookFormScreen';
import HomeScreen from './src/screen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Minha Biblioteca' }} 
        />
        <Stack.Screen 
          name="BookForm" 
          component={BookFormScreen} 
          options={({ route }) => ({ 
            // Muda o título dinamicamente: "Editar Livro" ou "Novo Livro"
            title: route.params?.book ? 'Editar Livro' : 'Novo Livro' 
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}