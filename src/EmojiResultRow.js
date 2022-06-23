import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EmojiResultRow({symbol, title}) {
  const Touchable = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback,
  });

  return (
    <Touchable onPress={() => copyToClipboard(symbol)}>
      <View style={styles.container}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Touchable>
  );
}

function copyToClipboard(symbol) {
  Clipboard.setString(symbol);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    fontSize: 40,
    color: 'black',
  },
  title: {
    marginLeft: 12,
    fontSize: 18,
    color: 'grey',
  },
});
