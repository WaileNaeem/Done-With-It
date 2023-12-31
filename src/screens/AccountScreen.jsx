import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import {colors} from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={'Waile Naeem'}
          subTitle={'wailennaeem22@gmail.com'}
          image={require('../../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title={'Log Out'}
        IconComponent={<Icon name={'logout'} backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
