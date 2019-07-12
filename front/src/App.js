import React from 'react';
import './styles/main.scss';
import PageTemplate from './components/PageTemplate/PageTemplate'
import InputWord from './components/Dict/InputWord'
import WordList from './components/Dict/WordList'

class App extends React.Component {
  state = {
    input: '',
    words: [
      { id:0, text: '첫 번째 단어', done: true },
      { id:1, text: '두 번째 단어', done: false },
      { id:2, text: '3 번째 단어', done: true }
    ]
  }

  onChangeHandler = (e) => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }

  id = this.state.words.length
  getId = () => ++this.id

  dataInsertHandler = () => {
    const { words, input } = this.state
    if (input) {
      const newWords = [
        ...words,
        {
          id: this.getId(),
          text: input,
          done: false
        }
      ]

      this.setState({
        words: newWords,
        input: ''
      })
    }
  }
  
  render() {
    const { input, words } = this.state
    const { onChangeHandler, dataInsertHandler } = this

    return (
      <div className="App">
        <PageTemplate>
          <InputWord onChange={onChangeHandler} value={input} onInsert={dataInsertHandler} />
          <WordList words={words} />
        </PageTemplate>
      </div>
    )
  }
}

export default App;
