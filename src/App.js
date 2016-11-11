import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { data: '' }
  }

  componentDidMount() {
    axios.get(`http://api.github.com/users/${this.props.children}`)
    .then(function (response) {
      this.setState({ data: response })
    }.bind(this))
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.login}</h1>
      </div>
    );
  }
}

export default App;
