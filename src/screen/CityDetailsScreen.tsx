import React, {useEffect} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';

import {Background} from '../components/Background';
import {useRoute} from '@react-navigation/native';
import {getCityData} from '../redux/cities/citiesActions';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingScreen} from './LoadingScreen';
import {CityDetailsComponent} from '../components/CityDetailsComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CityDetailsScreen: React.FC<{}> = ({}) => {
  const {params} = useRoute();
  const {city}: any = params;
  const dispatch = useDispatch();
  const store = useSelector((e: any) => e.cities);
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    const fetchCity = async () => {
      dispatch(await getCityData(city));
    };
    fetchCity();
  }, []);
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {!store.city._id ? (
          <LoadingScreen />
        ) : (
          <View style={{flex: 1}}>
            {/* Heade Containerr */}
            <View
              style={{
                ...styles.headerContainer,
                backgroundColor: 'lightblue',
              }}>
              <Text
                style={{
                  ...styles.pokemonName,
                  top: top + 40,
                }}>
                Shop: {store.city.name + '\n'}
              </Text>
              <Image source={{uri: store.city.image}} style={styles.pokeball} />
            </View>
            {!store.city.name ? (
              <View style={styles.loadingIndicator}>
                <ActivityIndicator color={'red'} size={50} />
              </View>
            ) : (
              <CityDetailsComponent city={store.city} />
            )}
          </View>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
    borderRadius: 55,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
