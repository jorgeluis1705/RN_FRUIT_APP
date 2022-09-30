import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import {ICity} from '../models/city.model';

export const CityDetailsComponent: React.FC<{city: ICity}> = ({city}) => {
  const navigator = useNavigation();
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
              }}
              key={ele._id}>
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  color: 'black',
                }}>
                {index + 1}.- {ele.name} {ele.count}
              </Text>
              <Button
                disabled={ele.count === 0}
                title="Tranfer"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={() =>
                  navigator.navigate(
                    'transfer' as never,
                    {
                      fruitID: ele._id,
                      cityOrigin: city._id,
                    } as never,
                  )
                }
              />
            </View>
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
