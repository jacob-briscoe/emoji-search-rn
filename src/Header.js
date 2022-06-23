import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'http://cdn.jsdelivr.net/emojione/assets/png/1f638.png'}}
      />
      <Text style={styles.text}>Emoji Search</Text>
      <Image
        style={styles.image}
        source={{uri: 'http://cdn.jsdelivr.net/emojione/assets/png/1f63a.png'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    marginHorizontal: 17,
  },
  image: {
    width: 32,
    height: 32,
  },
});

// todo: replace
// export default class Header extends PureComponent {
//   render() {
//     return (
//       <header className="component-header">
//         <img
//           src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
//           width="32"
//           height="32"
//           alt=""
//         />
//         Emoji Search
//         <img
//           src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
//           width="32"
//           height="32"
//           alt=""
//         />
//       </header>
//     );
//   }
// }
