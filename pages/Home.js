import React, { useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { API_TOKEN } from '@env';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const state = useSelector((state) => state.example);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, []);

  useEffect(() => {
    console.log('Change: ', state);
  }, [state]);

  return (
    <View style={styles.container}>
      <Text>ENV: {API_TOKEN} | redux: {state.prevAction}</Text>
      <Button title='Click ex1' onPress={() => {
        dispatch({
          type: 'ex1',
          payload: {
            name: 'click me 01',
          }
        });
      }}></Button>

      <Button title='Click ex2' onPress={() => {
        dispatch({
          type: 'ex2',
          payload: {
            name: 'click me 02',
          }
        });
      }}></Button>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
    margin: 50,
    padding: 10,
  },
});
