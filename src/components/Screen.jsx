import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar barStyle={'default'} />
      {children}
      {/* SafeAreaView does not support horizontal padding in
       iOS for handling this wrap chilren in a View and apply stylings to view  */}
      {/* <View style={styles.view}>{children}</View> */}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    borderColor: 'green',
    borderWidth: 1,
    flex: 1,
  },
});
