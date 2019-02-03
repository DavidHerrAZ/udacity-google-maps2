import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

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
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={configZoom} defaultCenter={configCenter}>
    <Marker position={configCenter} />
  </GoogleMap>
));

class MapComponent extends React.Component {
  render() {
    return <Map />;
  }
}

export default Map;
