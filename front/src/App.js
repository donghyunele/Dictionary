import React from 'react';
import './App.css';
import TodoListeTemplate from './components/TodoListTemplate'
import PageTemplate from './components/PageTemplate/PageTemplate'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eng: '',
      word: '',
      data: []
    }
  }

  ChangeEngValue = (e) => {
    this.setState({
      eng: e.target.value
    })
  }

  ChangeWordValue = (e) => {
    this.setState({
      word: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <TodoListeTemplate>
          템플릿 완성
        </TodoListeTemplate>
        <PageTemplate>
          123
        </PageTemplate>
        <header className="App-header">
          <h1>Hello Dictionary</h1>
        </header>
        <body>
          <h2>[입력 공간]</h2>
          단어 : <input type="text" value={this.state.eng} onChange={this.ChangeEngValue} />
          &nbsp;/ 뜻 : <input type="text" value={this.state.word} onChange={this.ChangeWordValue} />
          <button>추가</button><button>삭제</button>
        </body>
      </div>
    )
  }
}

export default App;
