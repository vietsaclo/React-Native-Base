import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux';
import { CHAT_GPT } from '../../common/utils/actions-type/ActionType';
import Message from './Message';

const BodyContent = () => {
  const scrollRef = useRef();
  const gptReducer = useSelector((state) => state.chatGPT);

  useEffect(() => {
    if (!scrollRef || !scrollRef.current) return;
    scrollRef.current.scrollToEnd({ animated: true });

  }, [gptReducer.talks.length])

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef}>
        {gptReducer.talks.map((v, k) => {
          return (
            <Message key={k} isMe={v.role === CHAT_GPT.ME} message={v.message} />
          );
        })}
      </ScrollView>
    </View>
  )
}

export default BodyContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  }
});
