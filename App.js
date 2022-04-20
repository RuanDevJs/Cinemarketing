import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './src/Components/Header';
import Movies from './src/Components/Movies';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Pages/Home';
import Movie from './src/Pages/Movie';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <StatusBar
      backgroundColor='#0E0F13'
      hidden={false}
    />
    <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              animation: 'slide_from_right'
            }}
          >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name='Movie'
            component={Movie}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

