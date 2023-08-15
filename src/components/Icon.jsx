import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MaterialIcon name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Icon;
