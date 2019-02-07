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
            <h3>{location.title}</h3>
            <dl clasName="location-details">
              <dt className="location-details-head">Price:</dt>
              <dd className="location-details-item">
                {location.yelpDetails.price || `N/A`}
              </dd>
              <dt className="location-details-head">Rating:</dt>
              <dd className="location-details-item">
                {location.yelpDetails.rating || `N/A`}
              </dd>
              <dt className="location-details-head">Reviews:</dt>
              <dd className="location-details-item">
                {location.yelpDetails.review_count || `N/A`}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    );
  }
}

export default Location;
