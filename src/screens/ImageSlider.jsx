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
  const [data, SetData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: height / 2,
          justifyContent: 'center',
          alignItems: 'center',
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
                width: width - 50,
                height: height / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                disabled
                style={{
                  width: '90%',
                  height: '90%',
                  backgroundColor: 'green',
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
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: currentIndex == index ? 50 : 8,
              height: currentIndex == index ? 10 : 8,
              borderRadius: currentIndex == index ? 5 : 4,
              backgroundColor: currentIndex == index ? 'green' : 'gray',
              marginLeft: 5,
            }}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          width: width,
          marginTop: 30,
        }}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            borderRadius: 10,
          }}>
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            borderRadius: 10,
          }}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({});
