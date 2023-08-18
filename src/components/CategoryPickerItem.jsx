import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from './Icon';
import AppText from './AppText';

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
