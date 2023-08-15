import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={'Login'} onPress={() => console.log('Pressed')} />
        <AppButton title={'Register'} color="secondary" />
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
  buttonContainer: {
    width: '100%',
    padding: 20,
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
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
    color: colors.black,
  },
});
