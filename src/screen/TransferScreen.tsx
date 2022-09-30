import {useRoute} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Background} from '../components/Background';
import {getFruitDetails} from '../redux/fruits/fruitsActions';
import {LoadingScreen} from './LoadingScreen';

export const TransferScreen: FC = (): JSX.Element => {
  const {params} = useRoute();
  const {fruitID}: any = params;
  const cities = useSelector((store: any) => store.cities.cities);
  const fruit = useSelector((store: any) => store.fruits.fruit);
  const cityOrigin = useSelector((store: any) => store.cities.city);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFruit = async () => {
      dispatch(await getFruitDetails(fruitID));
    };
    fetchFruit();
  }, []);
  return (
    <React.Fragment>
      <Background />
      <KeyboardAvoidingView style={{flex: 1}}>
        {fruit._id ? (
          <View
            style={{
              ...styles.container,
            }}>
            <Text style={styles.title}> Choose an city to send </Text>
            <Text style={styles.title}> {JSON.stringify(fruit)} </Text>
            <Text style={styles.title}> {JSON.stringify(cityOrigin)} </Text>
          </View>
        ) : (
          <LoadingScreen />
        )}
      </KeyboardAvoidingView>
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
