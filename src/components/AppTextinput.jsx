import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';

const AppTextinput = ({icon, width = '100%', ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <MaterialIcon
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        {...otherProps}
        placeholderTextColor={defaultStyles.colors.medium}
      />
    </View>
  );
};

export default AppTextinput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 30,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
});
