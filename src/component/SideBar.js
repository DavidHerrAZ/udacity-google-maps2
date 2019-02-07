import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import escapeRegExp from 'escape-string-regexp';

class Sidebar extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
  };

  state = {
    query: '',
    searchResults: [],
  };

  componentWillReceiveProps() {
    this.setState({ searchResults: this.props.locations });
  }

  updateQuery = (query) => {
    this.setState({ query: query }, this.searchLocations(query));
  };

  clearQuery = () => {
    this.setState({ query: '' }, this.searchLocations(''));
  };

  searchLocations = (query) => {
    let results;

    if (query !== '') {
      const match = new RegExp(escapeRegExp(query), 'i');
      results = this.props.locations.filter((location) =>
        match.test(location.title)
      );
      this.setState({ searchResults: results });
    } else {
      this.setState({ searchResults: this.props.locations });
    }
  };

  render() {
    const { query, searchResults } = this.state;

    return (
      <div className="App-sidebar">
        <h2>Explore The Hood</h2>
        <div className="search-container">
          <input
            className="App-search"
            id="App-Search"
            type="text"
            placeholder="Search by place name..."
            value={query}
            onChange={(event) => {
              this.updateQuery(event.target.value);
            }}
            aria-label="Search Neighborhood"
          />
          <button
            className="clear-search"
            arira-label="Clear Search"
            onClick={(e) => this.clearQuery()}
          />
        </div>

        <Location locations={searchResults} />
      </div>
    );
  }
}

export default Sidebar;
