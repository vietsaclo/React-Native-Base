import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import { COLORS } from '../../common/utils/consts/Consts';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Typing...' />
      <View style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 7,
    backgroundColor: COLORS.white,
  },
  input: {
    width: '85%',
    backgroundColor: COLORS.white,
    padding: 7,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.background_1,
    borderRadius: 4,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
