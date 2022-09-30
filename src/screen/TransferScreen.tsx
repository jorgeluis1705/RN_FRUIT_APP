import {useRoute} from '@react-navigation/native';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Button,
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
import {Picker} from '@react-native-picker/picker';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

export const TransferScreen: FC = (): JSX.Element => {
  const {params} = useRoute();
  const {fruitID}: any = params;
  const cities = useSelector((store: any) => store.cities.cities);
  const fruit = useSelector((store: any) => store.fruits.fruit);
  const cityOrigin = useSelector((store: any) => store.cities.city);
  const dispatch = useDispatch();
  const [selectedLanguage, setSelectedLanguage] = useState('java');

  const [transfer, setTransfer] = useState({
    origin: cityOrigin._id,
    count: 0,
    name: '',
    destiny: '',
  });

  useEffect(() => {
    const fetchFruit = async () => {
      dispatch(await getFruitDetails(fruitID));
    };
    fetchFruit();
  }, []);
  const pickerRef = useRef<any>();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  const onChangeNumber = (event: any) => {
    setTransfer({
      ...transfer,
      count: Number(event),
    });
  };
  const onValueChangePicker = (value: any) => {
    setTransfer({
      ...transfer,
      destiny: value,
    });
  };
  return (
    <React.Fragment>
      <Background />
      <KeyboardAvoidingView style={{flex: 1}}>
        {fruit._id ? (
          <ScrollView>
            <View
              style={{
                ...styles.container,
              }}>
              <Text style={{...styles.title}}>Choose a shop to send </Text>
              <Text style={{...styles.title}}>
                {' '}
                {fruit.name} {fruit.count}{' '}
              </Text>
              <RNPickerSelect
                style={pickerSelectStyles}
                onValueChange={onValueChangePicker}
                items={cities.map((e: any) => {
                  return {label: e.name, value: e._id};
                })}
              />
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={transfer.count.toString()}
                placeholder="Count to send"
                keyboardType="numeric"
              />
            </View>
            <Button
              disabled={!transfer.destiny}
              title="Send Fruits"
              color="#841584"
              accessibilityLabel="Send Fruits"
              onPress={() => {
                console.log({transfer});
              }}
            />
          </ScrollView>
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
  input: {
    backgroundColor: 'gray',
    width: '100%',
    marginTop: 35,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    backgroundColor: 'lightyellow',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
