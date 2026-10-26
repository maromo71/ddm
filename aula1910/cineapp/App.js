import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import FavoritesScreen from './src/screen/FavoritesScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name = "Home" component={HomeScreen} options={{title: 'CineApp'}}/>
      <Stack.Screen name = "Details" component={DetailsScreen} options={{title: 'Detalhes do Filme'}}/>
      <Stack.Screen name = "Favorites" component={FavoritesScreen} options={{title: 'Meus Favoritos'}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

