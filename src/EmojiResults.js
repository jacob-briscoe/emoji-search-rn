import React from 'react';

export default function EmojiResults() {
  return null;
}

// todo replace
// export default class EmojiResults extends PureComponent {
//   static propTypes = {
//     emojiData: PropTypes.array
//   };

//   componentDidMount() {
//     this.clipboard = new Clipboard(".copy-to-clipboard");
//   }

//   componentWillUnmount() {
//     this.clipboard.destroy();
//   }

//   render() {
//     return (
//       <div className="component-emoji-results">
//         {this.props.emojiData.map(emojiData => (
//           <EmojiResultRow
//             key={emojiData.title}
//             symbol={emojiData.symbol}
//             title={emojiData.title}
//           />
//         ))}
//       </div>
//     );
//   }
// }
