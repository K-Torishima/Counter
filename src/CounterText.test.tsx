import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CounterText from '../src/CounterText';

describe('CounterText', () => {
  if ('通常のCounterTextを描画できる', () => {
      const component = renderer.create(<CounterText count={0} />);
      expect(component).toMatchSnapshot();
    })
  if ('カウントが10以上の時のテキストが表示されているCounterTextを描画できる', () => {
      const component = renderer.create(<CounterText count={10} />)
      expect(component).toMatchSnapshot();
    })
});


