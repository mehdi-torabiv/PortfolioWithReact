import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main></Main>

      </div>
    );
  }
}
export default App;
