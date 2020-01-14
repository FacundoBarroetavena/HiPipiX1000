import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button, ScrollView } from 'react-native';
import languages from './languages';


export default function App() {
  const [language, setLanguage] = useState('pipinglish');
  const [data, setData] = useState();

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('languages', languages)
    } catch (error) {
      console.log(error);
    }
  }

  _retrieveData = async () => {
    try {
      console.log('lan:', 'lan-' + language)
      const value = await AsyncStorage.getItem('languages');
      console.log('value:', value)
      if (value !== null) {
        setData(JSON.parse(value));
      }
      else {
        console.log('no data stored')
      }
    } catch (error) {
      console.log('error:', error);
    }
  };

  useEffect(() => {
    AsyncStorage.clear()
    _storeData();
    _retrieveData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {data && data.languages.map((x, i) =>
          (
            <Text key={i}>{x.title}</Text>
          )
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    marginTop: 50
  },
  text: {
    width: '100%'
  }
});
