import React from 'react';
import PropTypes from 'prop-types';

class Listing extends React.Component {
  static propTypes = {
    listing: PropTypes.array.isRequired,
  };
  render() {
    const { listing } = this.props;

    return (
      <>
        <li className="location-card" key={listing.id}>
          {listing.title}
        </li>
      </>
    );
  }
}

export default Listing;
