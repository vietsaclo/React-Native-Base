import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Message from './Message';

const BodyContent = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Message isMe={true} message='How are you ?' />
        <Message isMe={false} message="I'm Fine, Thanks." />
      </ScrollView>
    </View>
  )
}

export default BodyContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
    // backgroundColor: 'blue',
  }
});
