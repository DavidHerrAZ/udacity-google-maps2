import React from 'react';

class Listing extends React.Component {
  render() {
    const { locations } = this.props;

    return (
      <>
        {locations.map((listing) => (
          <li className="location-card" key={listing.id}>
            {listing.title}
          </li>
        ))}
      </>
    );
  }
}

export default Listing;
