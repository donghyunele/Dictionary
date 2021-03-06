import React, { Component } from 'react'

import PageTemplate from '../components/template/PageTemplate'
import InputWord from '../components/Dict/InputWord'
import WordList from '../components/Dict/WordList'
import Buttons from '../components/Buttons'
import axios from 'axios'

import * as service from '../actions/posts'

export default class MainPage extends Component {
  constructor(props) {
    super(props)

    this.engInput = React.createRef()
    this.wordInput = React.createRef()
  }

  state = {
    list: [],
    eng: '',
    input: '',
    words: []
  }

  componentDidMount() {
    this.engInput.current.focus()
  }

  onCallAll = () => {
    this.fetchWordAll()
  }

  fetchWordAll = async () => {
    const info = await Promise.all([
      service.getEng()
    ])

    const keys = []

    info[0].data.map(item => {
      const word = item['english']
      keys.push(word)
      return 'success'
    })

    this.setState({
      list: keys
    })
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
    this.wordInput.current.focus()
  }

  onSubmitValue = () => {
    axios.post('http://localhost:5000/api/word/add', {
      english: this.state.eng,
      word: this.state.words
    })
    .then(function (response) {
      console.log('res : ' , response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
    this.onResetValue()
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
    const { list, input, words, eng } = this.state
    const { 
      onCallAll,
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
        <button onClick={onCallAll}>전체요청</button>
        {list 
          ? list.map((item, idx) => {
          return (
            <div key={idx}>
              {item}
            </div>
          )
        })
        : ''
        }
        <PageTemplate engInput={this.engInput} onChange={onChangeEng} eng={eng}>
          <InputWord wordInput={this.wordInput} onChange={onChangeHandler} value={input} onInsert={dataInsertHandler} />
          <WordList words={words} onCheck={checkHandler} onRemove={removeDataHandler} />
          <Buttons onReset={onResetValue} onSave={onSubmitValue} />
        </PageTemplate>
      </div>
    )
  }
}
