import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { COLORS } from '../../common/utils/consts/Consts';

const Message = (props) => {
  const messageAlign = () => {
    return props.isMe ? styles.alignRight : styles.alignLeft;
  }

  const containerStyle = () => {
    return props.isMe ? {} : styles.containerGpt;
  }

  const getContents = () => {
    const result = [];
    const avatar = (
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{props.isMe ? 'ME' : 'GPT'}</Text>
      </View>
    );
    const message = (
      <View style={styles.message}>
        <Text style={[styles.messageText, messageAlign()]}>{props.message}</Text>
      </View>
    );

    result.push(avatar);
    result.push(message);
    return result;
  };

  return (
    <View style={[styles.container, containerStyle()]}>
      {getContents()[props.isMe ? 1 : 0]}
      {getContents()[props.isMe ? 0 : 1]}
    </View>
  )
}

export default Message;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.background_0,
    padding: 7,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 7,
    marginBottom: 7,
  },
  containerGpt: {
    backgroundColor: COLORS.white,
  },
  avatar: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background_1,
  },
  avatarText: {
    fontWeight: 'bold',
  },
  message: {
    width: '90%',
    padding: 7,
  },
  messageText: {

  },
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
})
