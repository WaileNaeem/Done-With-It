import {Image, StyleSheet} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require('../../assets/logo-red.png')}
        style={styles.logo}
      />

      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          placeholder="Email"
          icon={'email'}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name={'email'}
        />
        <AppFormField
          placeholder="Password"
          icon={'lock'}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          name={'password'}
        />
        <SubmitButton title={'Login'} />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  container: {
    padding: 10,
  },
});
