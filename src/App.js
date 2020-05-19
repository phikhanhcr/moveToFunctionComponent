import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css';
import Card from './components/card'
var data;

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
