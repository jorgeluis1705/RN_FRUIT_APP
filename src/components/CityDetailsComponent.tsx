import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {ICity} from '../models/city.model';

export const CityDetailsComponent: React.FC<{city: ICity}> = ({city}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles.container,
          marginTop: 370,
        }}>
        <Text style={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          repellendus laudantium incidunt adipisci hic, perferendis mollitia,
          magnam debitis iusto molestiae nihil! Quae amet saepe dolorum quod
          iure unde inventore deleniti?
        </Text>

        <Text style={styles.title}>Fruits in this shop</Text>
        <View style={{flexDirection: 'row'}}>
          {city.fruits.map((ele, index) => (
            <Text
              style={{
                ...styles.regularText,
                marginRight: 10,
                color: 'black',
                borderColor: 'green',
                borderWidth: 1,
              }}
              key={ele._id}>
              {index + 1}.- {ele.name} {ele.count}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
