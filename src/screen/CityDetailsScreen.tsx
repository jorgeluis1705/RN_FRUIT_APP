import React, {useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, Platform} from 'react-native';

import {Background} from '../components/Background';
import {useRoute} from '@react-navigation/native';
import {getCityData} from '../redux/cities/citiesActions';
import {useDispatch, useSelector} from 'react-redux';
import {LoadingScreen} from './LoadingScreen';

export const CityDetailsScreen: React.FC<{}> = ({}) => {
  const {params} = useRoute();
  const {city}: any = params;
  const dispatch = useDispatch();
  const store = useSelector((e: any) => e.cities);

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
          <View style={{alignItems: 'center'}}>
            <Text>{JSON.stringify(store.city)}</Text>
          </View>
        )}
      </KeyboardAvoidingView>
    </>
  );
};
