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

  // Set state to required 5 app locations before mount w/ static data.
  componentDidMount() {
    this.setState({ locations });

    locations.map((location) => {
      Yelp.getLocationDetails(
        location.title,
        location.position.lat,
        location.position.lng,
        500
      ).then((results) => {
        // https://stackoverflow.com/questions/29537299/react-how-do-i-update-state-item1-on-setstate-with-jsfiddle
        // Make a shallow copy of locations
        let locationsCopy = [...this.state.locations];
        // Make a shallow copy of yelpDetails
        let locationCopy = { ...locationsCopy[location.id] };
        // Set it's yelpDetails property equal to the getLocationDetails results
        locationCopy.yelpDetails = results;
        // Put matched location back in
        locationsCopy[location.id] = locationCopy;
        // And update state with the copy
        this.setState({
          locations: locationsCopy,
        });
      });
    });
  }

  render() {
    const { locations } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Sidebar locations={locations} />
          <Map locations={locations} />
        </main>
      </div>
    );
  }
}

export default App;
