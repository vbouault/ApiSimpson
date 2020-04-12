import React, { Component } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

 const defaultQuote =
  [
    {
    "quote": "By chilling my loins I increase the chances of impregnating my wife.",
    "character": "Apu Nahasapeemapetilon",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    "characterDirection": "Left"
    }
  ]

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      simpson: defaultQuote[0]
    }
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote(){
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.data)
    .then(data => {
      console.log(data)
       this.setState({
        simpson: data[0]
      }); 
    })
}
  render(){
    return (
      <div className="App">
        <QuoteCard simpson={this.state.simpson}/>
        <button type="button" onClick={this.getQuote}>New Quote</button>
      </div>
    );
  }

}

export default App;
