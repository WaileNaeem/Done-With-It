import {useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
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
