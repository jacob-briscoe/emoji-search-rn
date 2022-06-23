import React from 'react';
import {FlatList} from 'react-native';
import EmojiResultRow from './EmojiResultRow';

export default function EmojiResults({emojis}) {
  return (
    <FlatList
      data={emojis}
      keyExtractor={item => item.title}
      renderItem={({item}) => (
        <EmojiResultRow symbol={item.symbol} title={item.title} />
      )}
    />
  );
}
