import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-google-maps';
import crosshairs from '../crosshairs.svg';

class Markers extends React.Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
  };

  render() {
    // set locations object to passed props
    const { locations, configCenter } = this.props;
    // further deconstruct locations object for map function
    const mapLocations = locations.locations;

    // Declare google to set marker animation
    const google = window.google;

    return (
      <>
        <Marker
          key="Home"
          title="Home"
          name="Home"
          position={configCenter}
          defaultIcon={crosshairs}
        />
        {mapLocations.map((location) => (
          <Marker
            key={location.yelpDetails.id || location.title}
            title={location.title}
            name={location.title}
            position={location.position}
            animation={google.maps.Animation.DROP}
          />
        ))}
      </>
    );
  }
}
export default Markers;
