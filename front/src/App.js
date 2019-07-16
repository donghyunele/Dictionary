import React from 'react';
import './styles/main.scss';
import PageTemplate from './components/template/PageTemplate'
import InputWord from './components/Dict/InputWord'
import WordList from './components/Dict/WordList'
import Buttons from './components/Buttons'
import axios from 'axios'

class App extends React.Component {
  state = {
    eng: '',
    input: '',
    words: []
  }

  onChangeEng = (e) => {
    const { value } = e.target
    this.setState({
      eng: value
    })
  }

  onResetValue = () => {
    this.setState({
      eng: '',
      input: '',
      words: []
    })
  }

  onSubmitValue = () => {
    axios.post('/add', {
      english: this.state.eng,
      word: this.state.words
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
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

  removeDataHandler = (id) => {
    const { words } = this.state
    const idx = words.findIndex(word => word.id === id)

    const newWords = [
      ...words.slice(0, idx),
      ...words.slice(idx+1, words.length)
    ]
    
    this.setState({
      words: newWords
    })
  }

  checkHandler = (id) => {
    const { words } = this.state
    const idx = words.findIndex(word => word.id === id)

    const toggled = {
      ...words[idx],
      done: !words[idx].done
    }

    const newWords = [
      ...words.slice(0, idx),
      toggled,
      ...words.slice(idx+1, words.length)
    ]
    
    this.setState({
      words: newWords
    })
  }

  render() {
    const { input, words, eng } = this.state
    const { 
      onChangeHandler,
      onResetValue,
      onSubmitValue,
      dataInsertHandler, 
      removeDataHandler, 
      checkHandler, 
      onChangeEng
    } = this

    return (
      <div className="App">
        <PageTemplate onChange={onChangeEng} eng={eng}>
          <InputWord onChange={onChangeHandler} value={input} onInsert={dataInsertHandler} />
          <WordList words={words} onCheck={checkHandler} onRemove={removeDataHandler} />
          <Buttons onReset={onResetValue} onSave={onSubmitValue} />
        </PageTemplate>
      </div>
    )
  }
}

export default App;
