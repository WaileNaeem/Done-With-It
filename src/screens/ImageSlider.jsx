import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const {height, width} = Dimensions.get('window');

const ImageSlider = () => {
  const [data, setData] = useState([
    {id: 1, name: 'ahmad'},
    {id: 1, name: 'ali'},
    {id: 1, name: 'furqan'},
    {id: 1, name: 'waile'},
    {id: 1, name: 'junaid'},
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View
              style={{
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
              }}>
              <TouchableOpacity
                disabled
                style={{
                  padding: 20,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: currentIndex == index ? 30 : 8,
              height: currentIndex == index ? 10 : 8,
              borderRadius: currentIndex == index ? 5 : 4,
              backgroundColor: currentIndex == index ? 'green' : 'gray',
              marginLeft: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
