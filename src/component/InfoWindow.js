import React from 'react';
import PropTypes from 'prop-types';
import { InfoWindow } from 'react-google-maps';

class InfoWindows extends React.Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
  };

  render() {
    return (
      <>
        <InfoWindow />
      </>
    );
  }
}

export default InfoWindows;
