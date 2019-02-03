import { GoogleMapConfig } from '../config';
import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const configKey = GoogleMapConfig.key;
const configCenter = GoogleMapConfig.center;
const configZoom = GoogleMapConfig.zoom;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${configKey}&v=3`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
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
