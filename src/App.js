import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Map from './component/Map';
import Sidebar from './component/SideBar';
import locations from './data/locations.json';
import * as Yelp from './api/YelplAPI';

class App extends Component {
  state = {
    locations: [],
  };

  // Set state to required 5 app locations on app mount
  componentDidMount() {
    this.setState({ locations });

    Yelp.getLocationDetails(
      locations[0].title,
      locations[0].position.lat,
      locations[0].position.lng,
      500
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Sidebar className="App-sidebar" locations={this.state.locations} />
          <Map locations={this.state.locations} />
        </main>
      </div>
    );
  }
}

export default App;
