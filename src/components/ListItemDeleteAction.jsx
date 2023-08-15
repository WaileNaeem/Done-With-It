import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
