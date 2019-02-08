import React from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import crosshairs from '../crosshairs.svg';

class Markers extends React.Component {
  static propTypes = {
    locations: PropTypes.object.isRequired,
  };

  // Multiple calls needed on marker click
  handleMarkerClick = (id) => {
    this.props.locations.toggleInfoWindow(id);
    this.props.locations.toggleAnimate(id);
  };

  render() {
    // set locations object to passed props
    const {
      animateMarkerID,
      locations,
      showInfoBoxID,
      toggleInfoWindow,
    } = this.props.locations;

    const { configCenter } = this.props;

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

        {locations.map((location) => (
          <Marker
            key={location.yelpDetails.id || location.title}
            title={location.title}
            name={location.title}
            position={location.position}
            animation={(() => {
              switch (animateMarkerID) {
                case location.id:
                  return google.maps.Animation.BOUNCE;
                default:
                  return;
              }
            })()}
            onClick={() => this.handleMarkerClick(location.id)}
          >
            {showInfoBoxID === location.id && (
              <InfoWindow onCloseClick={() => toggleInfoWindow(location.id)}>
                <div className="location-info">
                  <h3>
                    <a href={location.yelpDetails.url}>{location.title}</a>
                  </h3>
                  <img
                    className="location-info-image"
                    alt={location.title}
                    src={location.yelpDetails.image_url}
                  />
                  <p>Phone: {location.yelpDetails.display_phone}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </>
    );
  }
}
export default Markers;
