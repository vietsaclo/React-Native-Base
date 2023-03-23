import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { API_TOKEN } from '@env';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin: 50}}>ENV: {API_TOKEN}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
});
