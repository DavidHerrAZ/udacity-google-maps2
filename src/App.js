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
    yelpDetails: [],
  };

  // Set state to required 5 app locations on app mount
  componentDidMount() {
    this.setState({ locations });

    locations.map((location) => {
      Yelp.getLocationDetails(
        location.title,
        location.position.lat,
        location.position.lng,
        500
      ).then((data) => console.log(data));
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Sidebar locations={this.state.locations} />
          <Map locations={this.state.locations} />
        </main>
      </div>
    );
  }
}

export default App;
