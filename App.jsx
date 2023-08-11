import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';

const App = () => {
  const {height, width} = useWindowDimensions();
  console.log('height', height);
  console.log('width', width);
  return <ViewImageScreen />;
};

export default App;

const styles = StyleSheet.create({});
