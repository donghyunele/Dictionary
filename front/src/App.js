import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './styles/main.scss';

import MainPage from './root/MainPage'
import BoardPage from './root/BoardPage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/board" component={BoardPage} />
        </div>
      </Router>
    )
  }
}

export default App;
