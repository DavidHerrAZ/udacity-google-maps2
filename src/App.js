import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Map from './component/Map';
import locations from './data/locations.json';

class App extends Component {
  state = {
    locations: [],
  };

  // Set state to required 5 app locations on app mount
  componentDidMount() {
    this.setState({ locations });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* Pass locations state for use in initial marker drops */}
        <Map locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
