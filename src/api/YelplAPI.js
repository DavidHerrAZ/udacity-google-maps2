import { YelpConfig } from '../config';

const configApi = YelpConfig.root;
const configKey = YelpConfig.key;

let yelpHeaders = new Headers();

yelpHeaders.append('Authorization', 'Bearer ' + configKey);

export const getLocationDetails = (term, latitude, longitude, radius) =>
  fetch(
    // Must use cors-anywhere as proxy due to Yelp restrictions on client side CORS
    // https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers
    `https://cors-anywhere.herokuapp.com/${configApi}/businesses/search?term=${term}&latitude=${latitude}&longitude=${longitude}&radius=${radius}`,
    {
      headers: yelpHeaders,
    }
  )
    .then((res) => res.json())
    // For simplicity, assume the first result is closest match
    // OK for MVP due to supplying name, lat/lng, and small search radius.
    .then((data) => data.businesses[0]);
