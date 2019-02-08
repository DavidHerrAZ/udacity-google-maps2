import React from 'react';
import PropTypes from 'prop-types';

class Location extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
    toggleInfoWindow: PropTypes.func.isRequired,
  };

  render() {
    const { locations, toggleInfoWindow } = this.props;

    return (
      <ul className="App-locations">
        {locations.map((location) => (
          <li
            key={location.yelpDetails.id || location.title}
            className="location-card"
            id="location-card"
            tabIndex="0"
            onClick={() => toggleInfoWindow(location.id)}
          >
            <h3>{location.title}</h3>
            <dl className="location-details">
              <dt>Price:</dt>
              <dd>{location.yelpDetails.price || `N/A`}</dd>
              <dt>Rating:</dt>
              <dd>{location.yelpDetails.rating || `N/A`}</dd>
              <dt>Reviews:</dt>
              <dd>{location.yelpDetails.review_count || `N/A`}</dd>
            </dl>
          </li>
        ))}
      </ul>
    );
  }
}

export default Location;
