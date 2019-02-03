import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';

class Markers extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
  };

  render() {
    const { locations } = this.props;
    const mapLocations = locations.locations;

    return (
      <>
        {mapLocations.map((location) => (
          <Marker
            title={location.title}
            name={location.title}
            position={location.position}
          />
        ))}
      </>
    );
  }
}
export default Markers;
