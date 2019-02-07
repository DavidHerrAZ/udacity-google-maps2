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
            <table>
              <tbody>
                <tr>
                  <td>Price: {location.yelpDetails.price || `N/A`}</td>
                  <td>Rating: {location.yelpDetails.rating || `N/A`}</td>
                  <td>Reviews: {location.yelpDetails.review_count || `N/A`}</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
    );
  }
}

export default Location;
