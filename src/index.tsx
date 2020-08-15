import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CounterText from './CounterText'; // カウントするTextを分離し、ここにimport
import PlusButton from './PlusButton';
import ReduceButton from './ReduceButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default function Counter() {
  // ここで初期値を入れないとアンデファインドになる
  const [count, setCounter] = React.useState(0);

  const reduceCounter = React.useCallback(() => {
    setCounter(count - 1);
  }, [count]);
  return (
    <View style={styles.container}>
      <PlusButton count={count} setCounter={setCounter} />
      <CounterText count={count} />
      <ReduceButton count={count} setCounter={setCounter} />
    </View>
  );
}
// カウントが１０以降ならコメントが出る
// 0以下はdisabledなのでマイナスボタンが押せなくなる
// カウントが0以上ならマイナスボタンが押せる
