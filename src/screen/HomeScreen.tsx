import axios from 'axios';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {axiosClient} from '../axios/axiosClient';
import {Background} from '../components/Background';
import {CityCard} from '../components/CityCard';
import {ICity} from '../models/city.model';
import {getAllCities} from '../redux/cities/citiesActions';
import {loginStyles} from '../theme/loginTheme';
import {LoadingScreen} from './LoadingScreen';

export const HomeScreen: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const store = useSelector((e: any) => e.cities);
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    const fetchCities = async () => {
      dispatch(await getAllCities());
    };
    fetchCities();
  }, []);

  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {!store.cities.length ? (
          <LoadingScreen />
        ) : (
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={store.cities}
              keyExtractor={(city: ICity) => city._id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              // Header
              ListHeaderComponent={
                <Text
                  style={{
                    ...loginStyles.title,
                    ...loginStyles.globalMargin,
                    top: top + 20,
                    marginBottom: top + 20,
                    paddingBottom: 10,
                  }}>
                  City
                </Text>
              }
              renderItem={({item}) => <CityCard city={item} />}
              // infinite scroll
              // onEndReached={ loadPokemons }
              onEndReachedThreshold={0.4}
              ListFooterComponent={
                <ActivityIndicator
                  style={{height: 100}}
                  size={20}
                  color="grey"
                />
              }
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </>
  );
};
