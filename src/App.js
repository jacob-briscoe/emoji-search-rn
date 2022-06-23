import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Header';
import SearchInput from './SearchInput';
import filterEmoji from './filterEmoji';
import EmojiResults from './EmojiResults';

export default function App() {
  const [emojis, setEmojis] = useState(filterEmoji(''));

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput
        onSearchInputTextChange={searchText =>
          setEmojis(filterEmoji(searchText))
        }
      />
      <EmojiResults emojis={emojis} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
});
