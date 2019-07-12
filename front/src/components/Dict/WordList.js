import React, {Component} from 'react';
import WordItem from './WordItem';

class WordList extends Component {
  render() {
    const { words } = this.props
    const wordList = words.map(word => {
      return <WordItem key={word.id} done={word.done}>{word.text}</WordItem>
    })
    return (
      <div>
        { wordList }
      </div>
    );
  }
}

export default WordList;