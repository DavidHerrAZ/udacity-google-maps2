import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'react-google-maps';

class InfoWindows extends React.Component {
  static propTypes = {
    locations: PropTypes.isRequired,
  };

  render() {
    const { locations } = this.props;
    const mapLocations = locations.locations;

    return (
      <>
        <InfoWindow>
          <h3>{mapLocations.title}</h3>
        </InfoWindow>
      </>
    );
  }
}

export default InfoWindows;
