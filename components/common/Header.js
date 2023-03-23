import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { COLORS } from '../../common/utils/consts/Consts';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Chat-GPT 
        <Text style={{color: COLORS.background_1}}>&nbsp;API</Text>
      </Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  headerText: {
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },
})
