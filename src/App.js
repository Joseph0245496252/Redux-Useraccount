import React, { Component } from 'react';
import './index.css'
import Home from './Home';
import AddAccount from './AddAccount';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import EditAccount from './EditAccount';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddAccount} />
        <Route exact path="/edit/:id" component={EditAccount} />
      </BrowserRouter>
    );
  }
}
export default App;