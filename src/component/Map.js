import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import Markers from '../component/Marker';

// Set config variables for google map from config.js
import { GoogleMapConfig } from '../config';

const configKey = GoogleMapConfig.key;
const configCenter = GoogleMapConfig.center;
const configZoom = GoogleMapConfig.zoom;

// code snippets modified from react-google-maps documentation
// https://tomchentw.github.io/react-google-maps/#documentation
const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${configKey}&v=3`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        className="App-map"
        // style={{ height: `calc(100vh - 40px - 2rem)` }}
        role="application"
        aria-label="Neighborhood Map"
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((locations) => (
  <GoogleMap defaultZoom={configZoom} defaultCenter={configCenter}>
    <Markers locations={locations} configCenter={configCenter} />
  </GoogleMap>
));

class MapComponent extends React.Component {
  render() {
    return <Map />;
  }
}

export default Map;
