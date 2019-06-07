import React, { Component } from 'react';
import Header from './components/layout/Header';
import Groceries from './components/Groceries';
import AddGrocery from './components/AddGrocery';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    groceries: [
      {
        id: uuid.v4(),
        name: 'banana',
        purchased: false,
      },
      {
        id: uuid.v4(),
        name: 'peanut butter',
        purchased: false,
      },
      {
        id: uuid.v4(),
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

  addGrocery = (name) => {
    const newGrocery = {
      id: uuid.v4(),
      name: name,
      completed: false
    }
    this.setState( { groceries: [...this.state.groceries, newGrocery]})
  }

  render() {
    return (
      <div className="App">
      <div className="container">
        <Header />
        <AddGrocery addGrocery={this.addGrocery}/>
        <Groceries groceries={this.state.groceries} togglePurchased={this.togglePurchased} 
        delGrocery={this.delGrocery} />
      </div>
      </div>
    );
  }
}

export default App;
