import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CounterText from './CounterText'; // カウントするTextを分離し、ここにimport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  button: {
    backgroundColor: '#008080',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
  },

  disabledButton: {
    backgroundColor: 'gray',
  },
});

export default function Counter() {
  // ここで初期値を入れないとアンデファインドになる
  const [count, setCounter] = React.useState(0);

  const addCounter = React.useCallback(() => {
    setCounter(count + 1);
  }, [count]);

  const reduceCounter = React.useCallback(() => {
    setCounter(count - 1);
  }, [count]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addCounter}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <CounterText count={count} />
      <TouchableOpacity
        style={[styles.button, count <= 0 && styles.disabledButton]}
        onPress={reduceCounter}
        disabled={count <= 0}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
// カウントが１０以降ならコメントが出る
// 0以下はdisabledなのでマイナスボタンが押せなくなる
// カウントが0以上ならマイナスボタンが押せる
