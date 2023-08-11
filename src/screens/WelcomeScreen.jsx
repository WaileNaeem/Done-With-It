import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}>
        <Text></Text>
      </View>
      <View style={styles.registerButton}>
        <Text></Text>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});
