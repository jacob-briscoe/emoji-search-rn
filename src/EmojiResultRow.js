import React from 'react';
import {StyleSheet} from 'react-native';

export default function EmojiResultRow() {
  return null;
}

const styles = StyleSheet.create({});

// todo replace
// export default class EmojiResultsRow extends PureComponent {
//   static propTypes = {
//     title: PropTypes.string,
//     symbol: PropTypes.string
//   };

//   render() {
//     const codePointHex = this.props.symbol.codePointAt(0).toString(16);
//     const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
//     return (
//       <div
//         className="component-emoji-result-row copy-to-clipboard"
//         data-clipboard-text={this.props.symbol}
//       >
//         <img alt={this.props.title} src={src} />
//         <span className="title">{this.props.title}</span>
//         <span className="info">Click to copy emoji</span>
//       </div>
//     );
//   }
// }
