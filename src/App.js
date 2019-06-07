import React, { Component } from 'react';
import Groceries from './components/Groceries';
import './App.css';

class App extends Component {
  state = {
    groceries: [
      {
        id: 1,
        name: 'banana',
        purchased: false,
      },
      {
        id: 2,
        name: 'peanut butter',
        purchased: false,
      },
      {
        id: 3,
        name: 'bread',
        purchased: false,
      }
    ]
  }

  // Toggle Purchased
  togglePurchased = (id) => {
    this.setState({ groceries: this.state.groceries.map(grocery => {
      if(grocery.id === id) {
        grocery.purchased = !grocery.purchased
      }
      return grocery;
    }) })
  }

  // Delete Grocery Item
  delGrocery = (id) => {
    this.setState({ groceries: [...this.state.groceries.filter(grocery => grocery.id !== id)] });
  }

  render() {
    return (
      <div className="App">
      <Groceries groceries={this.state.groceries} togglePurchased={this.togglePurchased} 
      delGrocery={this.delGrocery} />
      </div>
    );
  }
}

export default App;
