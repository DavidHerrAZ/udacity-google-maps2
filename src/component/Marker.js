import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';

class Markers extends React.Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
  };

  render() {
    // set locations object to passed props
    const { locations } = this.props;
    // further deconstruct locations object for map function
    const mapLocations = locations.locations;

    return (
      <>
        {mapLocations.map((location) => (
          <Marker
            key={(location.position.lat, location.position.lng)}
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
