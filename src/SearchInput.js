import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export default function SearchInput({onSearchInputTextChange}) {
  return (
    <TextInput
      onChangeText={onSearchInputTextChange}
      autoComplete="off"
      autoCorrect={false}
      style={styles.textInput}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    minHeight: 40,
    borderColor: 'grey',
    borderWidth: 0.45,
    borderRadius: 7,
  },
});

// todo replace
// export default class SearchInput extends PureComponent {
//   static propTypes = {
//     textChange: PropTypes.func
//   };

//   handleChange = event => {
//     this.props.textChange(event);
//   };

//   render() {
//     return (
//       <div className="component-search-input">
//         <div>
//           <input onChange={this.handleChange} />
//         </div>
//       </div>
//     );
//   }
// }
