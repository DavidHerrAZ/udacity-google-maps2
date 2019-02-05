import React from 'react';
import PropTypes from 'prop-types';
import Listing from './Listing';
import escapeRegExp from 'escape-string-regexp';

class Sidebar extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
  };

  state = {
    query: '',
    searchResults: [],
  };

  updateQuery = (query) => {
    this.setState({ query: query });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    const { locations } = this.props;

    let searchResults;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      searchResults = locations.filter((listing) => match.test(listing.title));
    } else {
      searchResults = locations;
    }

    return (
      <div className="App-sidebar">
        <input
          className="App-search"
          type="text"
          placeholder="Search by place name..."
          value={query}
          onChange={(event) => {
            this.updateQuery(event.target.value);
          }}
        />

        <ul className="App-listings">
          {searchResults.map((listing) => (
            <Listing listing={listing} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
