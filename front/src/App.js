import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      data: []
    }
  }

  ChangeValue = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello Dictionary</h1>
        </header>
        <body>
          <h2>[입력 공간]</h2>
          단어 : <input type="text" value={this.state.value} onChange={this.ChangeValue} />
          &nbsp;/ 뜻 : <input type="text" value={this.state.value} onChange={this.ChangeValue} />
        </body>
      </div>
    )
  }
}

export default App;
