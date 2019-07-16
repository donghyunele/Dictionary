import React, {Component} from 'react';
import WordItem from './WordItem';

class WordList extends Component {
  render() {
    const { words, onCheck, onRemove } = this.props
    const wordList = words.map(word => {
      return <WordItem 
        key={word.id} 
        done={word.done} 
        onToggle={() => onCheck(word.id)} 
        onRemove={() => onRemove(word.id)}>
        {word.text}
      </WordItem>
    })
    return (
      <div>
        { wordList }
      </div>
    );
  }
}

export default WordList;