import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import {colors} from '../config/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialIcon name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialIcon name="trash-can-outline" color="white" size={35} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {width: '100%', height: '100%', marginTop: '10%'},
  closeIcon: {
    top: 20,
    left: 25,
    position: 'absolute',
  },
  deleteIcon: {
    top: 20,
    right: 25,
    position: 'absolute',
  },
});
