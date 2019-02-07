import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Map from './component/Map';
import Sidebar from './component/SideBar';
import locations from './data/locations.json';
import * as Yelp from './api/YelplAPI';
import escapeRegExp from 'escape-string-regexp';

class App extends Component {
  state = {
    locations: [],
    searchResults: [],
  };

  // Set state to required 5 app locations at mount w/ static data.
  componentWillMount() {
    this.setState({ locations });

    // Then call yelp to supplement with business details & re-set state.
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

    this.setState({ searchResults: this.state.locations });
  }

  searchLocations = (query) => {
    let results;

    if (query !== '') {
      const match = new RegExp(escapeRegExp(query), 'i');
      results = this.state.locations.filter((location) =>
        match.test(location.title)
      );
      this.setState({ searchResults: results });
    } else {
      this.setState({ searchResults: this.state.locations });
    }
  };

  render() {
    const { searchResults, locations } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <a href="#App-Search" id="skip-to-content">
              Skip to Neighborhood Search
            </a>
            <a href="#location-card" id="skip-to-content">
              Skip to Neighborhood Listings
            </a>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>HoodLuv</h1>
        </header>
        <main>
          <Sidebar
            locations={searchResults}
            onSearchLocations={this.searchLocations}
          />
          <Map
            locations={(() => {
              switch (searchResults.length) {
                case 0:
                  return locations;
                default:
                  return searchResults;
              }
            })()}
          />
        </main>
      </div>
    );
  }
}

export default App;
