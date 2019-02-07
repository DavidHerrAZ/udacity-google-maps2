import React from 'react';
import PropTypes from 'prop-types';

class Location extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
  };

  render() {
    const { locations } = this.props;

    return (
      <ul className="App-locations">
        {locations.map((location) => (
          <li
            key={location.yelpDetails.id || location.title}
            className="location-card"
          >
            {location.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default Location;
