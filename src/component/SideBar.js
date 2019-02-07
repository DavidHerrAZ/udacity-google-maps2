import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

class Sidebar extends React.Component {
  static propTypes = {
    locations: PropTypes.array.isRequired,
    onSearchLocations: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  updateQuery = (query) => {
    this.setState({ query: query }, this.props.onSearchLocations(query));
  };

  clearQuery = () => {
    this.setState({ query: '' }, this.props.onSearchLocations(''));
  };

  render() {
    const { query } = this.state;
    const { locations } = this.props;

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

        <Location locations={locations} />

        <details>
          <summary>Data Source:</summary>
          Location details sourced from{' '}
          <a href="https://www.yelp.com/developers/documentation/v3">Yelp</a>
        </details>
      </div>
    );
  }
}

export default Sidebar;
