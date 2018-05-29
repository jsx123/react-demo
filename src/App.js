import React, { Component } from 'react';
import './css/home.css';
import './css/ranking.css';
import './css/search.css';

import Header from './components/Header.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
