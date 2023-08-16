import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

const AppTextinput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialIcon
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
};

export default AppTextinput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});
