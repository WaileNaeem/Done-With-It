import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {colors} from '../config/colors';
import AppText from './AppText';

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
      <Image source={require(image)} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 200,
  },
});
