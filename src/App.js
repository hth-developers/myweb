import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/paper-kit.css';
import './assets/css/demo.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
    {/*<navbar />
    <slider />
    <main />
    <footer>*/}
      </div>
    );
  }
}

export default App;
