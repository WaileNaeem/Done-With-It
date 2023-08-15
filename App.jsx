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
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Screen from './src/components/Screen';
import ListItem from './src/components/ListItem';
import Icon from './src/components/Icon';

const App = () => {
  const {height, width} = useWindowDimensions();
  console.log('height', height);
  console.log('width', width);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Screen>
        <ListItem title={'My Title'} IconComponent={<Icon name={'email'} />} />
      </Screen>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
