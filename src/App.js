import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Groceries from './components/Groceries';
import AddGrocery from './components/AddGrocery';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  state = {
    groceries: [
      {
        id: uuid.v4(),
        name: 'Avocados',
        purchased: false,
      },
      {
        id: uuid.v4(),
        name: 'Onions',
        purchased: false,
      },
      {
        id: uuid.v4(),
        name: 'Chips',
        purchased: false,
      },
      {
        id: uuid.v4(),
        name: 'Cilantro',
        purchased: false,
      },
      {
        id: uuid.v4(),
        name: 'Tomatoes',
        purchased: false,
      },
      {
        id: uuid.v4(),
        name: 'Jalapeños',
        purchased: false,
      }
    ]
  }

  // Toggle Purchased
  togglePurchased = (id) => {
    this.setState({
      groceries: this.state.groceries.map(grocery => {
        if (grocery.id === id) {
          grocery.purchased = !grocery.purchased
        }
        return grocery;
      })
    })
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
    this.setState({ groceries: [...this.state.groceries, newGrocery] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddGrocery addGrocery={this.addGrocery} />
                <Groceries groceries={this.state.groceries} togglePurchased={this.togglePurchased}
                  delGrocery={this.delGrocery} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
