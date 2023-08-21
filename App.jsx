import {useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
import Screen from './src/components/Screen';

import AppTextinput from './src/components/AppTextinput';
import AppPicker from './src/components/AppPicker';
import LoginScreen from './src/screens/LoginScreen';
import ListingEditScreen from './src/screens/ListingEditScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import ImageSlider from './src/screens/ImageSlider';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

const App = () => {
  const {height, width} = useWindowDimensions();
  // console.log('height', height);
  // console.log('width', width);
  const [category, setCategory] = useState();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ImageSlider />
    </GestureHandlerRootView>
  );
};

export default App;

/*<Screen>
<AppPicker
  selectedItem={category}
  onSelectItem={item => setCategory(item)}
  icon={'apps'}
  placeholder={'Category'}
  items={categories}
/>
<AppTextinput icon={'email'} placeholder="Email" />
</Screen>*/
